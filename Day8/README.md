# Closure Assignment – JavaScript

This repository contains solutions for two closure-based JavaScript problems:

1. **Closure-Based Counter**
2. **Bank Account Simulation with Private Variables**

Both examples demonstrate how closures allow JavaScript functions to maintain private state and encapsulated variables.

---

## 🚀 Question 1: Closure-Based Counter

### Features
- Increment counter  
- Decrement counter  
- Get current count  
- `count` variable remains private  

### Example Usage

```js
const counter = createCounter();
counter.increment(); // Current count: 1
counter.increment(); // Current count: 2
counter.decrement(); // Current count: 1
