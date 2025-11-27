// Start interval that prints "Loading..." every second
let count = 0;

const loadingInterval = setInterval(() => {
    console.log("Loading...");
    count++;

    // After 5 seconds (5 iterations), stop the interval
    if (count === 5) {
        clearInterval(loadingInterval);
        console.log("Loaded successfully!");
    }
}, 1000);
