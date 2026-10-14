let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", function() {
    window.location.href = "login.html";
});

let backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function() {
    window.location.href = "home.html";
});

let signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
});

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");

usernameInput.addEventListener("blur", function() {
    if (usernameInput.value === "") {
        usernameError.textContent = "Username is required";
    } else {
        usernameError.textContent = "";
    }    
});

passwordInput.addEventListener("blur", function() {
    if (passwordInput.value === "") {
        passwordError.textContent = "Password is required";
    } else {
        passwordError.textContent = "";
    }
});