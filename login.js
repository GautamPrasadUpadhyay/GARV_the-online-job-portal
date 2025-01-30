// JavaScript for Modal and Admin Mode
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');
const loginSubmit = document.getElementById('loginSubmit');
const adminDashboard = document.getElementById('adminDashboard');

// Open Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Close Login Modal
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Handle Login Submission
loginSubmit.addEventListener('click', () => {
    const loginType = document.getElementById('loginType').value;
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (loginType === 'admin') {
        // Simulate admin login
        if (email === "admin@example.com" && password === "admin123") {
            alert('Admin login successful!');
            loginModal.style.display = 'none';
            adminDashboard.style.display = 'block';
        } else {
            alert('Invalid admin credentials!');
        }
    } else {
        // Simulate user login
        alert('User login successful!');
        loginModal.style.display = 'none';
    }
});

// Close Modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Card Click Handlers
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        console.log('Card clicked:', card.querySelector('.card-title').textContent);
    });

});