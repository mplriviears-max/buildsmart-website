document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let message = document.getElementById("loginMessage");

    // Get stored account (from signup)
    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    if (email === storedEmail && password === storedPassword) {
        message.textContent = "Login successful!";
        message.style.color = "lightgreen";

        // Save login status
        localStorage.setItem("loggedIn", "true");

    } else {
        message.textContent = "Invalid email or password.";
        message.style.color = "red";
    }

});