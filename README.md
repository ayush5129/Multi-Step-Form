# Multi-Step Form with React
## Project Overview
This project is a responsive multi-step form built with React. It collects user information over three steps: personal information, address information, and confirmation of the entered data. The form includes data validation, error handling, and navigation controls to ensure a smooth user experience. The form data is persisted to local storage so that the user can navigate between steps or revisit the form without losing their progress.
## Features
Multi-step Form: Collects data in multiple steps (Personal Information, Address Information, Confirmation).
Data Validation: Client-side validation for each step (e.g., checking required fields, email format, numeric phone number).
Error Handling: Displays appropriate error messages when fields are invalid.
Local Storage Persistence: Stores form data in the browser’s local storage, so users can resume where they left off if they refresh or leave the page.
Responsive Design: Works on desktop, tablet, and mobile screens.
State Management: Utilizes React useState and useEffect for state management and local storage interaction.
## Technologies Used
React.js: Frontend framework for building UI components.
HTML5 & CSS3: For structuring and styling the form.
Local Storage: Browser API to persist form data between page reloads.
JavaScript (ES6): Logic for form handling, validation, and state management.
