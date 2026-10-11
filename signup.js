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

usernameInput.addEventListener("input", function() {
    if (usernameInput.value.trim() === "") {
        usernameInput.setCustomValidity("Username cannot be empty");
    } else {
        usernameInput.setCustomValidity("");
    }    
});

passwordInput.addEventListener("input", function() {
    if (passwordInput.value.trim() === "") {
        passwordInput.setCustomValidity("Password cannot be empty");
    } else {
        passwordInput.setCustomValidity("");
    }       
});