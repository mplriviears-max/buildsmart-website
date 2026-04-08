document.getElementById("accountForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    let message = document.getElementById("accountMessage");

    // CHECK EMPTY FIELDS
    if (name === "" || email === "" || password === "" || confirm === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    // EMAIL VALIDATION
    if (!email.includes("@")) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
        return;
    }

    // PASSWORD LENGTH
    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    // PASSWORD MATCH
    if (password !== confirm) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    // ✅ SAVE USER DATA (IMPORTANT FOR LOGIN)
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // SUCCESS MESSAGE
    message.textContent = "Account created successfully!";
    message.style.color = "lightgreen";

});