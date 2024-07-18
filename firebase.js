import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgaDiiMkJQmEUtOSTvdBtgfjbHfhgt3Pg",
    authDomain: "ara-codingconvention.firebaseapp.com",
    projectId: "ara-codingconvention",
    storageBucket: "ara-codingconvention.appspot.com",
    messagingSenderId: "387155828673",
    appId: "1:387155828673:web:107adf1e7be11e836c9940"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const parent = document.getElementById('parentHTML');

export const Authenticate = (id, pass) => {
    return signInWithEmailAndPassword(auth, id, pass)
    .then((userCredential) => {
        parent.classList.remove('modal-is-opening');
        parent.classList.remove('modal-is-open');
        setTimeout(() => {
            parent.classList.add('modal-is-closing');
        }, 200);
        setTimeout(() => {
            modal.close(); 
        }, 800);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    })
};