let nums = [10,3,7,20,13,2];
let squares = nums.map(n => n*n);
let primes = nums.map(n =>{
    if (n < 2)return false;
    for (let i =2; i <=Math.sqrt(n);i++)
        if (n % i ===0)return false;
    return true;
});
let total = nums.reduce((a,b) => a+b,0);
let sortedDesc = nums.sort((a,b) => b-a);
console.log(squares);
console.log(primes);
console.log(total);
console.log(sortedDesc);