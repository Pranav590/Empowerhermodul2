let employees = [
    { name: "Prajakta", tasksCompleted: 8, rating: 4.7 },
    { name: "Pranav", tasksCompleted: 6, rating: 4.0 },
    { name: "Shravni", tasksCompleted: 9, rating: 3.5 },
    { name: "Rutuja", tasksCompleted: 10, rating: 4.9 },
    { name: "Riva", tasksCompleted: 7, rating: 2.8 }
];

// 1. Filter employees who completed more than 7 tasks
let filtered = employees.filter((emp) => emp.tasksCompleted > 7);

// 2. Map to new array with name and performance level
let evaluated = filtered.map((emp) => {
    let performance = "";
    if (emp.rating > 4.5) {
        performance = "Excellent";
    } else if (emp.rating >= 3) {
        performance = "Good";
    } else {
        performance = "Needs Improvement";
    }

    return { name: emp.name, performance: performance };
});

// 3. Sort final array: Excellent → Good → Needs Improvement
evaluated.sort((a, b) => {
    const order = { "Excellent": 1, "Good": 2, "Needs Improvement": 3 };
    return order[a.performance] - order[b.performance];
});

console.log(evaluated);
