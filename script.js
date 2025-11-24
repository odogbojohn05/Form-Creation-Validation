document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (username.length < 3 || !usernameRegex.test(username)) {
      isValid = false;
      messages.push("Username must be at least 3 characters and contain only letters/numbers.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      isValid = false;
      messages.push("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; 
      feedbackDiv.style.backgroundColor = "#d4edda"; 
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#d8000c"; 
      feedbackDiv.style.backgroundColor = "#ffbaba"; 
    }
  });
});
