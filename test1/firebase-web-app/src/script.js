// filepath: /firebase-web-app/firebase-web-app/src/script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTn-5weR5MDk6bU66vMPMkv9h00MfkW_k",
    authDomain: "gautam-a7103.firebaseapp.com",
    databaseURL: "https://gautam-a7103-default-rtdb.firebaseio.com",
    projectId: "gautam-a7103",
    storageBucket: "gautam-a7103.firebasestorage.app",
    messagingSenderId: "215646861233",
    appId: "1:215646861233:web:e8cfc76cc015a4ee4cef90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// Registration function
function registerUser(username, email, phone) {
    const userRef = ref(db, 'users/' + username);
    set(userRef, {
        email: email,
        phoneNumber: phone
    })
    .then(() => {
        window.alert("Registration Successful!");
        window.location.href = "login.html";
    })
    .catch((error) => {
        window.alert("Error: " + error.message);
        console.error("Error:", error);
    });
}

// Login function
function loginUser(username, email, phone) {
    const dbRef = ref(db);
    get(child(dbRef, 'users/' + username))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                if (userData.email === email && userData.phoneNumber === phone) {
                    window.alert("Login Successful!");
                    window.location.href = "dashboard.html";
                } else {
                    window.alert("Invalid credentials!");
                }
            } else {
                window.alert("User not found! Please register first.");
            }
        })
        .catch((error) => {
            window.alert("Error: " + error.message);
            console.error("Error:", error);
        });
}

// Logout function
function logoutUser() {
    window.alert("You have logged out successfully!");
    window.location.href = "index.html";
}

// Event listeners for forms
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    const registerForm = document.querySelector('#registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.querySelector('#username').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;
            loginUser(username, email, phone);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.querySelector('#username').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;
            registerUser(username, email, phone);
        });
    }

    const logoutButton = document.querySelector('#logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', logoutUser);
    }
});