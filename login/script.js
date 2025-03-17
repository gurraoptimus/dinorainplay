document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    // Toggle password visibility
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            passwordInput.type = "password";
            togglePassword.classList.replace("fa-eye-slash", "fa-eye");
        }
    });

    // Form validation & login (placeholder logic)
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = passwordInput.value;

        if (email === "test@dinorainplay.com" && password === "123456") {
            alert("Login successful!");
            // Simulera omdirigering
            window.location.href = "../dashboard/dashboard.html";
        } else {
            alert("Invalid email or password!");
        }
    });
});
