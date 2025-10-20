document.addEventListener("DOMContentLoaded", () => {
  const signInLink = document.querySelector(".signIn");

  const loggedInEmail = localStorage.getItem("loggedInUser");

  if (loggedInEmail) {
    const userData = localStorage.getItem(loggedInEmail);
    const user = JSON.parse(userData);

    if (user && user.name) {
      signInLink.textContent = `Hi, ${user.name}!`;
      signInLink.href = "#";
      signInLink.classList.add("logged-in");
    }
  }


  signInLink.addEventListener("click", (e) => {
    if (signInLink.classList.contains("logged-in")) {
      e.preventDefault();

      const confirmLogout = confirm("Do you want to log out?");
      if (confirmLogout) {
        localStorage.removeItem("loggedInUser");
        window.location.reload();
      }
    }
  });
});