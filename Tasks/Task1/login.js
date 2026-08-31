document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const emailField = document.getElementById("login-email");
  const passwordField = document.getElementById("login-password");
  const statusEl = document.getElementById("status-message");
  const detailsSection = document.getElementById("user-details");
  const detailsContent = document.getElementById("details-content");

  function setFieldState(field, message) {
    const errorBox = document.getElementById(`${field.id}-error`);
    field.classList.toggle("invalid", Boolean(message));
    if (errorBox) {
      errorBox.textContent = message || "";
      errorBox.classList.toggle("visible", Boolean(message));
      errorBox.style.display = message ? "block" : "none";
    }
  }

  function validateEmail() {
    const value = emailField.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      setFieldState(emailField, "Email is required.");
      return false;
    }
    if (!pattern.test(value)) {
      setFieldState(emailField, "Please enter a valid email address.");
      return false;
    }
    setFieldState(emailField, "");
    return true;
  }

  function validatePassword() {
    const value = passwordField.value.trim();
    if (!value) {
      setFieldState(passwordField, "Password is required.");
      return false;
    }
    setFieldState(passwordField, "");
    return true;
  }

  [emailField, passwordField].forEach((field) => {
    field.addEventListener("input", () => {
      if (field === emailField) validateEmail();
      if (field === passwordField) validatePassword();
    });

    field.addEventListener("blur", () => {
      if (field === emailField) validateEmail();
      if (field === passwordField) validatePassword();
    });
  });

  function showStatus(message, type = "success") {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = "status-message";
    statusEl.classList.add(type === "success" ? "success" : "error");
    statusEl.hidden = false;
  }

  function renderUserDetails(user) {
    if (!detailsSection || !detailsContent) return;

    const hobbies = Array.isArray(user.hobbies) && user.hobbies.length ? user.hobbies.join(", ") : "Not selected";
    const gender = user.gender ? user.gender : "Not selected";
    const department = user.department ? user.department : "Not selected";
    const designation = user.designation ? user.designation : "Not selected";
    const dob = user.dob ? user.dob : "Not selected";

    detailsContent.innerHTML = `
      <p><strong>Name:</strong> ${user.name || "-"}</p>
      <p><strong>Email:</strong> ${user.email || "-"}</p>
      <p><strong>Password:</strong> ${user.password || "-"}</p>
      <p><strong>Contact:</strong> ${user.contact || "-"}</p>
      <p><strong>Department:</strong> ${department}</p>
      <p><strong>Designation:</strong> ${designation}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Hobbies:</strong> ${hobbies}</p>
      <p><strong>Submitted At:</strong> ${user.submittedAt ? new Date(user.submittedAt).toLocaleString() : "-"}</p>
    `;
    detailsSection.hidden = false;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!isEmailValid || !isPasswordValid) {
      const firstInvalid = [emailField, passwordField].find((field) => field.classList.contains("invalid"));
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const user = window.UserStorage.findUserByEmailAndPassword(emailField.value, passwordField.value);

    if (!user) {
      showStatus("No account found with these credentials.", "error");
      detailsSection.hidden = true;
      return;
    }

    showStatus("Login successful.", "success");
    renderUserDetails(user);
  });
});
