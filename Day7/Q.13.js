let arr = ["electronics", "clothing", "electronics", "toys", "clothing", "toys"];

let result = arr.reduce((acc, item) => {
    if (acc[item] === undefined) {
        acc[item] = 1;
    } else {
        acc[item]++;
    }
    return acc;
}, {});

console.log(result);