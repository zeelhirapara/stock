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
firebase.initializeApp(firebaseConfig);

// Make Auth and Firestore easy to use in other files
const auth = firebase.auth();
const db = firebase.firestore();