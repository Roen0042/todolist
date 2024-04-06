// Login
const login = document.querySelector("#login");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const main = document.querySelector("#main");
const greeting = document.querySelector("#greeting p");

const NONE = "none";
const userNameKey = "username";


function loginSumbit(e){
    e.preventDefault();
    login.classList.add(NONE);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    localStorage.setItem(userNameKey, username);
    greetings(username);
}

function greetings(username) {
    greeting.innerHTML = `반갑습니다 <span>${username}<span>!`;
    main.classList.remove(NONE);
    login.classList.add(NONE);
}

loginInput.addEventListener("submit", loginSumbit);

const savedUserName = localStorage.getItem(userNameKey);
if (savedUserName === null) {
    loginForm.classList.remove(NONE);
    loginForm.addEventListener("submit", loginSumbit);
} else {
    greetings(savedUserName);
}
