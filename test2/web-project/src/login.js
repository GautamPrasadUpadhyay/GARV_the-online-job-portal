// This file handles the login functionality for the web application.

import { auth } from './firebase-config.js';

const loginForm = document.getElementById('login-form');
const loginIcon = document.getElementById('login-icon');

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            alert('Login successful');
            // Redirect to another page or show logged-in status
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});