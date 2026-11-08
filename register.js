let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");
let signupForm = document.getElementById("signupForm");
let backBtn = document.getElementById("backBtn");

usernameInput.addEventListener("blur", function() {
    usernameError.textContent = usernameInput.value.trim() === "" ? "Username is required":"";  
});

passwordInput.addEventListener("blur", function() {
    passwordError.textContent = passwordInput.value === "" ? "Password is required":"";
});

signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    
    usernameError.textContent = username === "" ? "Username is required":"";
    passwordError.textContent = password === "" ? "Password is required":"";

    if (username === "" || password === "") {
        return;
    }

    // Check if the username already exists
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if(existingUsers.some((user)=>user.username.toLowerCase() === username.toLowerCase())){
        usernameError.textContent = "Username already exists";
        return;
    }

    // Every user will be stored as customer
    const newUser = {
        id:Date.now(),
        username:username,
        password:password,
        role:"customer"
    };

    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));
    
    alert("Registration Successful");
    
    window.location.href = "login.html";
    
    form.reset();
});


backBtn.addEventListener("click", function() {
    window.location.href = "home.html";
});
