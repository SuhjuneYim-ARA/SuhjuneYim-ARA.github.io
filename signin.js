import {Authenticate} from "./firebase.js";

const signInButton = document.querySelector('.sign-in-button');
const signInPasswordField = document.getElementById('userPassword');
const closeButton = document.querySelector('close-page-button');

signInButton.addEventListener('click', async(e) => {
    var inputId = document.getElementById('userID').value;
    inputId = inputId + "@araengineering.co.kr"
    var inputPassword = document.getElementById('userPassword').value;
    const trySignIn = await Authenticate(inputId, inputPassword);
})

signInPasswordField.addEventListener('keypress', function(event) {
    if(event.key === "Enter"){
        signInButton.click();
        }
    })