let loginBtn = document.getElementById("loginBtn");
let backBtn = document.getElementById("backBtn");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");

loginBtn.addEventListener("click", function() {
    window.location.href = "home.html";
});

backBtn.addEventListener("click", function() {
    window.location.href = "home.html";
});


let usernameError = document.getElementById("usernameError");

usernameInput.addEventListener("blur", function() {
    if (usernameInput.value === "") {
        usernameError.textContent = "Username is required";
    } else {
        usernameError.textContent = "";
    }
});

let passwordError = document.getElementById("passwordError");

passwordInput.addEventListener("blur", function() {
    if (passwordInput.value === "") {
        passwordError.textContent = "Password is required";
    } else {
        passwordError.textContent = "";
    }
});

