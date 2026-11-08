let message = document.getElementById("message");
let loginForm = document.getElementById("loginForm");
let backBtn = document.getElementById("backBtn");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("passwordError");
let usernameError = document.getElementById("usernameError");


usernameInput.addEventListener("blur", function() {
    usernameError.textContent = usernameInput.value.trim() === "" ? "Username is required" : "";
});

passwordInput.addEventListener("blur", function() {
    passwordError.textContent = passwordInput.value === "" ? "Password is requird" : "";
});

loginForm.addEventListener("submit",function(event){
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    usernameError.textContent = username === "" ? "Username is required" : "";
    passwordError.textContent = password === "" ? "Password is required" : "";

    if(username === "" || password === ""){
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if(!users.some(user => user.username.toLowerCase() === username.toLowerCase() && user.password === password)){
        passwordError.textContent = "Invalid username or password.";
        return;
    }

    window.location.href = "products.html";

    message.textContent = "Login successful!";
    
    loginForm.reset();
});


backBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "home.html";
});