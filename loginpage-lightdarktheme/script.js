const toggle = document.getElementById("theme-toggle");
const pass = document.getElementById("password");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  const errorMsg = document.getElementById("error");

  if (password.length < 6) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
});

document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  const successMsg = document.getElementById("success");

  if (password.length > 10) {
    successMsg.style.display = "block";
  } else {
    successMsg.style.display = "none";
  }
});