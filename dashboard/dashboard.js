document.addEventListener("DOMContentLoaded", () => {
    const usernameSpan = document.getElementById("username");
    const logoutBtn = document.getElementById("logoutBtn");

    // Hämta användarnamn (kan kopplas till backend)
    const storedUsername = localStorage.getItem("username") || "User";
    if (usernameSpan) {
        usernameSpan.textContent = storedUsername;  // Uppdatera användarnamn
    }
    // Logout-knapp
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("username"); // Rensar inloggad användare
        window.location.href = "../index.html"; // Tillbaka till login
    });
});
