window.addEventListener("DOMContentLoaded", function() {

    let userArea = document.getElementById("userArea");

    let isLoggedIn = localStorage.getItem("loggedIn");
    let userName = localStorage.getItem("userName");

    if (isLoggedIn === "true" && userName) {
        userArea.innerHTML = `
            <span style="color:white; margin-right:10px;">Welcome, ${userName}</span>
            <a href="#" id="logoutBtn">Logout</a>
        `;

        document.getElementById("logoutBtn").addEventListener("click", function() {
            localStorage.removeItem("loggedIn");
            location.reload();
        });
    }

});