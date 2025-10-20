//Pics
function changeImage(element) {
    const mainImage = document.getElementById("displayedImage");
    const thumbnails = document.querySelectorAll(".thumb");

    mainImage.src = element.src;

    thumbnails.forEach(thumb => thumb.classList.remove("active"));

    element.classList.add("active");
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phonenumber").value,
            subject: document.getElementById("subject").value,
            comment: document.getElementById("comment").value
        };

        console.log("Form data stored:", formData);
    });
});



document.addEventListener("DOMContentLoaded", () => {
  const priceInput = document.getElementById("price");
  const downInput = document.getElementById("down");
  const monthsSelect = document.getElementById("months");
  const monthlyDisplay = document.getElementById("monthly");

  function calculatePayment() {
    const price = parseFloat(priceInput.value) || 0;
    const down = parseFloat(downInput.value) || 0;
    const months = parseInt(monthsSelect.value);
    const annualInterest = 12; // 12% yearly
    const monthlyInterest = annualInterest / 100 / 12;

    const loanAmount = price - down;

    const monthlyPayment =
      loanAmount *
      (monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
      (Math.pow(1 + monthlyInterest, months) - 1);

    monthlyDisplay.textContent = `$${isNaN(monthlyPayment) ? 0 : monthlyPayment.toFixed(2)}`;
  }

  [priceInput, downInput, monthsSelect].forEach((el) =>
    el.addEventListener("input", calculatePayment)
  );

  calculatePayment();
});

document.getElementById("map").addEventListener("click", () => {
  window.open("https://www.google.com/maps?q=3926+Calvin+Street,+Baltimore,+MD", "_blank");
});



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


const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

toggle?.addEventListener('click', () => {
  menu.classList.toggle('active');
});