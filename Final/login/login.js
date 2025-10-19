document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".password-toggle");

  // Show/Hide password
  toggleIcon.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle icon style
    toggleIcon.classList.toggle("fa-eye");
    toggleIcon.classList.toggle("fa-eye-slash");
  });

  // Login form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
      alert("No account found with this email.");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password === password) {
      alert(`Welcome back, ${userData.name || "user"}!`);
      localStorage.setItem("loggedInUser", email);

      // Redirect (optional)
      window.location.href = "/product details/index.html"; // change to your homepage
    } else {
      alert("Wrong password.");
    }
  });
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  localStorage.setItem("username", username);

  window.location.href = "/index.html";
});