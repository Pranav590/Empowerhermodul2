const readline = require("readline");

// Setup input listener
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Prompt user for countdown time
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of seconds for countdown: ", (input) => {
    let time = Number(input);

    if (isNaN(time) || time <= 0) {
        console.log("Please enter a valid positive number.");
        rl.close();
        process.exit();
    }

    console.log(`Countdown started for ${time} seconds...`);
    rl.close();

    // Countdown interval
    const timer = setInterval(() => {
        console.log(`Time left: ${time} seconds`);
        time--;

        if (time < 0) {
            clearInterval(timer);
            console.log("Countdown Complete!");
            process.exit();
        }
    }, 1000);

    // Check for "s" key using a delayed setTimeout
    setTimeout(() => {
        console.log("Press 's' at any time to stop the countdown.");

        process.stdin.on("keypress", (key) => {
            if (key === "s") {
                clearInterval(timer);
                console.log("Countdown stopped by user!");
                process.exit();
            }
        });

    }, 500); // Wait ~0.5 seconds before listening
});
