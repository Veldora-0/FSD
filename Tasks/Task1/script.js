// Client-side validation and storage for registrations.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const statusEl = document.getElementById("status-message");

  const fields = {
    name: document.getElementById("name"),
    password: document.getElementById("password"),
    email: document.getElementById("email"),
    contact: document.getElementById("contact"),
    department: document.getElementById("department"),
    designation: document.getElementById("designation"),
    dob: document.getElementById("dob"),
  };

  function setFieldState(field, message) {
    const errorBox = document.getElementById(`${field.id}-error`);
    if (field) field.classList.toggle("invalid", Boolean(message));
    if (errorBox) {
      errorBox.textContent = message || "";
      errorBox.classList.toggle("visible", Boolean(message));
      errorBox.style.display = message ? "block" : "none";
    }
  }

  function validateName() {
    const value = fields.name.value.trim();
    const namePattern = /^[A-Za-z\s]+$/;
    if (!value) {
      setFieldState(fields.name, "Name is required.");
      return false;
    }
    if (!namePattern.test(value)) {
      setFieldState(fields.name, "Name must contain only alphabets and spaces.");
      return false;
    }
    setFieldState(fields.name, "");
    return true;
  }

  function validatePassword() {
    const value = fields.password.value.trim();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!value) {
      setFieldState(fields.password, "Password is required.");
      return false;
    }
    if (!passwordPattern.test(value)) {
      setFieldState(
        fields.password,
        "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, and one number.",
      );
      return false;
    }
    setFieldState(fields.password, "");
    return true;
  }

  function validateEmail() {
    const value = fields.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setFieldState(fields.email, "Email is required.");
      return false;
    }
    if (!emailPattern.test(value)) {
      setFieldState(fields.email, "Please enter a valid email address.");
      return false;
    }
    setFieldState(fields.email, "");
    return true;
  }

  function validateContact() {
    const value = fields.contact.value.trim();
    const contactPattern = /^\d{10}$/;
    if (!value) {
      setFieldState(fields.contact, "Contact number is required.");
      return false;
    }
    if (!contactPattern.test(value)) {
      setFieldState(fields.contact, "Contact number must be exactly 10 digits.");
      return false;
    }
    setFieldState(fields.contact, "");
    return true;
  }

  Object.values({ name: fields.name, password: fields.password, email: fields.email, contact: fields.contact }).forEach((field) => {
    field.addEventListener("input", () => {
      if (field.id === "name") validateName();
      if (field.id === "password") validatePassword();
      if (field.id === "email") validateEmail();
      if (field.id === "contact") validateContact();
    });
    field.addEventListener("blur", () => {
      if (field.id === "name") validateName();
      if (field.id === "password") validatePassword();
      if (field.id === "email") validateEmail();
      if (field.id === "contact") validateContact();
    });
  });

  function gatherExtraFields() {
    const gender = (document.querySelector('input[name="gender"]:checked') || {}).value || "";
    const hobbiesEls = Array.from(document.querySelectorAll('input[name="hobbies"]:checked'));
    const hobbies = hobbiesEls.map((el) => el.value);
    return { gender, hobbies };
  }

  function saveRegistration(data) {
    return window.UserStorage.saveRegistration(data);
  }

  let hideTimer = null;
  function showStatusMessage(message, type = "success") {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = "status-message";
    statusEl.classList.add(type === "success" ? "success" : "error");
    statusEl.hidden = false;
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      statusEl.hidden = true;
    }, 3500);
  }

  function clearValidationStates() {
    // remove invalid classes and hide error messages
    Object.values(fields).forEach((f) => {
      if (!f) return;
      f.classList.remove("invalid");
      const err = document.getElementById(`${f.id}-error`);
      if (err) {
        err.textContent = "";
        err.classList.remove("visible");
        err.style.display = "none";
      }
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    // validate
    const isNameValid = validateName();
    const isPasswordValid = validatePassword();
    const isEmailValid = validateEmail();
    const isContactValid = validateContact();

    if (isNameValid && isPasswordValid && isEmailValid && isContactValid) {
      // collect data
      const extra = gatherExtraFields();
      const payload = {
        name: fields.name.value.trim(),
        password: fields.password.value, // in real apps don't store plaintext passwords in localStorage
        email: fields.email.value.trim(),
        contact: fields.contact.value.trim(),
        department: fields.department ? fields.department.value : "",
        designation: fields.designation ? fields.designation.value : "",
        dob: fields.dob ? fields.dob.value : "",
        gender: extra.gender,
        hobbies: extra.hobbies,
        submittedAt: new Date().toISOString(),
      };

      const ok = saveRegistration(payload);
      if (ok) {
        window.alert("Registration successful! Your data has been saved.");
        showStatusMessage("Registration saved successfully.", "success");
        form.reset();
        clearValidationStates();
      } else {
        window.alert("Unable to save registration. Please try again.");
        showStatusMessage("Unable to save registration. Please try again.", "error");
      }
    } else {
      const firstInvalidField = [fields.name, fields.password, fields.email, fields.contact].find((field) =>
        field.classList.contains("invalid"),
      );
      if (firstInvalidField) firstInvalidField.focus();
    }
  });

  // on reset: clear validation states and status message immediately
  form.addEventListener("reset", function () {
    clearValidationStates();
    if (statusEl) {
      statusEl.hidden = true;
      statusEl.textContent = "";
    }
  });
});
