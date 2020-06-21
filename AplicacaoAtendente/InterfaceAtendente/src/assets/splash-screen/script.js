const form = document.querySelector('form');
const remote = require('electron').remote;

const inputHost = document.querySelector('input[name="host"]');
const inputUser = document.querySelector('input[name="user"]');
const inputPassword = document.querySelector('input[name="password"]');

const savedHost = localStorage.getItem("host");
const savedUser = localStorage.getItem("user");
const savedPassword = localStorage.getItem("password");

inputHost.value = savedHost;
inputUser.value = savedUser;
inputPassword.value = savedPassword;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inputHost.value !== savedHost) {
        localStorage.setItem("host", inputHost.value);
    }

    if (inputUser.value !== savedUser) {
        localStorage.setItem("user", inputUser.value);
    }

    if (inputPassword.value !== savedPassword) {
        localStorage.setItem("password", inputPassword.value);
    }

    var window = remote.getCurrentWindow();
    window.close();
})
