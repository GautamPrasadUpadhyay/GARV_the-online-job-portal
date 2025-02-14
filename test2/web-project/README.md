# README.md

# Web Project

This project is a web application that includes user authentication features, allowing users to register and log in using Firebase services.

## Features

- User registration with username, email, and password.
- User login using email and password.
- Displays an icon upon successful login.

## Project Structure

```
web-project
├── src
│   ├── css
│   │   └── styles.css        # Styles for the application
│   ├── js
│   │   ├── firebase-config.js # Firebase configuration and initialization
│   │   ├── login.js          # Login functionality
│   │   ├── register.js       # Registration functionality
│   └── pages
│       ├── login.html        # Login page
│       └── register.html     # Registration page
├── index.html                # Main entry point
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running:
   ```
   npm install
   ```
4. Set up Firebase by creating a project in the Firebase console and obtaining your configuration details.
5. Update `src/js/firebase-config.js` with your Firebase configuration.
6. Open `index.html` in your browser to access the application.

## Usage Guidelines

- Navigate to the registration page to create a new account.
- Use the login page to authenticate with your email and password.
- Upon successful login, an icon will be displayed to indicate that you are logged in.

## License

This project is licensed under the MIT License.