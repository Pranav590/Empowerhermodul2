function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },

    decrement: function () {
      count--;
      console.log("Current count:", count);
    },

    display: function () {
      console.log("Current count:", count);
    }
  };
}

// Create two separate counters
const c1 = createCounter();
const c2 = createCounter();

// Counter 1 operations
c1.increment(); // Output: Current count: 1
c1.increment(); // Output: Current count: 2

// Counter 2 operations
c2.increment(); // Output: Current count: 1 (different counter)
c2.increment(); // Output: Current count: 2
c2.decrement(); // Output: Current count: 1

