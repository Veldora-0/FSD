(function () {
  const STORAGE_KEY = "registrations";
  const DEMO_USERS = [
    {
      name: "John Doe",
      password: "Test1234",
      email: "john@example.com",
      contact: "1234567890",
      department: "cs",
      designation: "student",
      dob: "2000-05-12",
      gender: "male",
      hobbies: ["reading", "sports"],
      submittedAt: "2026-08-24T00:00:00.000Z"
    },
    {
      name: "Jane Doe",
      password: "Test1234",
      email: "jane@example.com",
      contact: "9876543210",
      department: "cs",
      designation: "student",
      dob: "2001-06-15",
      gender: "female",
      hobbies: ["reading", "music"],
      submittedAt: "2026-08-24T00:00:00.000Z"
    }
  ];

  function removeDemoUsers(users) {
    if (!Array.isArray(users)) return [];
    return users.filter((user) => !DEMO_USERS.some((demoUser) => {
      return demoUser.name === user.name
        && demoUser.email === user.email
        && demoUser.password === user.password;
    }));
  }

  const storage = {
    getRegistrations() {
      try {
        const data = localStorage.getItem(STORAGE_KEY);
        const parsed = data ? JSON.parse(data) : [];
        const cleaned = removeDemoUsers(parsed);

        if (cleaned.length !== (Array.isArray(parsed) ? parsed.length : 0)) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
        }

        return cleaned;
      } catch (error) {
        console.error("Failed to read registrations:", error);
        return [];
      }
    },

    saveRegistration(record) {
      try {
        const registrations = this.getRegistrations();
        registrations.push(record);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
        return true;
      } catch (error) {
        console.error("Failed to save registration:", error);
        return false;
      }
    },

    findUserByEmailAndPassword(email, password) {
      const normalizedEmail = (email || "").trim().toLowerCase();
      return this.getRegistrations().find((user) => {
        return user.email && user.email.toLowerCase() === normalizedEmail && user.password === password;
      });
    }
  };

  window.UserStorage = storage;
})();
