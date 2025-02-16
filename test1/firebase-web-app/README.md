# Firebase Web App

This project is a simple web application that allows users to register, log in, and access a dashboard using Firebase for authentication and data storage.

## Project Structure

```
firebase-web-app
├── src
│   ├── index.html        # Main entry point of the application
│   ├── login.html       # Login form for user authentication
│   ├── register.html    # Registration form for new users
│   ├── dashboard.html    # Dashboard displayed after successful login
│   ├── style.css        # Styles for the application
│   └── script.js        # JavaScript code for Firebase integration and form handling
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Features

- User Registration: New users can create an account by providing their username, email, and phone number.
- User Login: Existing users can log in using their credentials.
- Dashboard: After logging in, users are redirected to a dashboard that displays a welcome message and user information.
- Logout: Users can log out from the dashboard.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd firebase-web-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Replace the Firebase configuration in `src/script.js` with your own Firebase project settings.

5. Open `src/index.html` in a web browser to start the application.

## Usage Guidelines

- To register a new user, navigate to the registration page and fill out the form.
- After registration, you can log in using the credentials you just created.
- Once logged in, you will be redirected to the dashboard where you can see your welcome message and log out.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.