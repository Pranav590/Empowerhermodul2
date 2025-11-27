console.log("Message 1: This is the first message, printed immediately.");

setTimeout(() => {
    console.log("Message 2 after 2 seconds: This message was delayed using setTimeout.");
}, 2000);

console.log("Message 3: This is printed right after Message 1, without waiting.");
