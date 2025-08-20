// Navigation active link highlight
document.querySelectorAll("nav a").forEach(link => {
  if (window.location.href.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

// Login form validation
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }
    alert(`Welcome, ${username}! (demo login success)`);
    window.location.href = "index.html";
  });
}

// Register form validation
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!fullname || !email || !password) {
      alert("Please complete all fields.");
      return;
    }
    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";
  });
}
