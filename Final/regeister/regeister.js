document.addEventListener('DOMContentLoaded', () => {
  // --- Elements
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phonenumber');
  const passwordInput = document.getElementById('password');
  const toggle = document.querySelector('.password-toggle');

  // Debug: if something is missing, log it
  if (!passwordInput) console.error('Password input #password not found.');
  if (!toggle) console.error('Password toggle element .password-toggle not found.');

  // --- Password toggle (safe)
  if (toggle && passwordInput) {
    // ensure pointer cursor
    toggle.style.cursor = 'pointer';

    // Make sure initial classes contain an eye icon; if not, set a default
    // (Keep the 'fas' or 'fa-solid' class so Font Awesome styling stays)
    if (!toggle.classList.contains('fa-eye') && !toggle.classList.contains('fa-eye-slash')) {
      toggle.classList.add('fas', 'fa-eye');
    }

    toggle.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';

      // Swap icon classes while preserving 'fas' or other style class
      toggle.classList.toggle('fa-eye');
      toggle.classList.toggle('fa-eye-slash');

      // Accessibility
      toggle.setAttribute('aria-pressed', String(isPassword));
      passwordInput.focus();
    });
  }

  // --- Register form handling
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const phone = phoneInput?.value.trim() || '';
      const password = passwordInput?.value.trim() || '';

      if (!name || !email || !phone || !password) {
        alert('Please fill in all fields!');
        return;
      }

      // Basic phone validation: allow digits and optional +, require 9-11 digits
      const digits = phone.replace(/[^0-9]/g, '');
      if (!/^\d{9,11}$/.test(digits)) {
        alert('Please enter a valid phone number (9–11 digits).');
        return;
      }

      if (localStorage.getItem(email)) {
        alert('An account with this email already exists!');
        return;
      }

      const userData = { name, email, phone, password };
      localStorage.setItem(email, JSON.stringify(userData));

      alert('✅ Registration successful! You can now log in.');
      window.location.href = '/login/index.html';
    });
  } else {
    console.error('Form element not found on page.');
  }
});