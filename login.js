// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2XnYiPyTHZkTdEwJP2VMaaAW7ylc8RbE",
  authDomain: "login2-bf632.firebaseapp.com",
  projectId: "login2-bf632",
  storageBucket: "login2-bf632.firebasestorage.app",
  messagingSenderId: "859424676481",
  appId: "1:859424676481:web:28a05ff025157958018b80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//input
const email = document.getElementById("email");
const password = document.getElementById("password");

//button
const loginBtn = document.getElementById("loginBtn");

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting normally
        
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        // Basic validation
        if (email && password) {
            alert(`Login attempted with email: ${email}`);
            // Here you would typically make an API call to your backend
        } else {
            alert('Please fill in all fields');
        }
    });
});
        


