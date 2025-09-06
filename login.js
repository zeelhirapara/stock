// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDT5LQO7uG0oeCX7i_wMcLHeNe1TiepF3Q",
    authDomain: "stock-24a0b.firebaseapp.com",
    projectId: "stock-24a0b",
    storageBucket: "stock-24a0b.firebasestorage.app",
    messagingSenderId: "678382636911",
    appId: "1:678382636911:web:8817ff1ecddd6eed02e29a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


const loginEmail = document.getElementById('loginEmail').value;
const loginPassword = document.getElementById('loginPassword').value;

const signup = document.getElementById('signup');
submit.addEventListener("click", function (event) {
event.preventDefault()
alert("Login Successful");
})