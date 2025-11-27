// Function to display a greeting message
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

// Function that simulates getting user input after 1 second
function getUserInput(callback) {
    setTimeout(() => {
        let username = "Prajakta"; // Simulated fetched username
        callback(username);     // Calling the callback with the name
    }, 1000);
}

// Calling getUserInput and passing displayMessage as the callback
getUserInput(displayMessage);
