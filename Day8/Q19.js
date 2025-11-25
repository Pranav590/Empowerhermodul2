// Global variable
let age = 25;

// Function that displays age
function displayAge() {
    console.log("Age inside displayAge:", age);
}

// Function that changes the global age variable
function changeAge() {
    age = 30; // updating the global variable
    console.log("Age inside changeAge:", age);
}

// Calling the functions
displayAge();   // Output: Age inside displayAge: 25
changeAge();    // Output: Age inside changeAge: 30

// Check updated global value
console.log("Updated global age:", age); // Output: Updated global age: 30
