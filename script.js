console.log("Starting...")
//Initialize Telegram Mini App
const TELEGRAM = window.Telegram.WebApp;
const user = TELEGRAM.initDataUnsafe.user;
console.log(user)

// Initialize click count
let clickCount = 0;

// Get references to the button, reset button, and response div
const button = document.getElementById('click-button');
const resetButton = document.getElementById('reset-button');
const responseDiv = document.getElementById('response');

// Set default message
responseDiv.textContent = "Click the button to start counting!"; // Default message

// Add click event listener to the button
button.addEventListener('click', () => {
    clickCount++; // Increment click count
    responseDiv.textContent = `You have clicked the button ${clickCount} times!`; // Update response
});

// Add click event listener to the reset button
resetButton.addEventListener('click', () => {
    clickCount = 0; // Reset click count
    responseDiv.textContent = "Click the button to start counting!"; // Reset message
});