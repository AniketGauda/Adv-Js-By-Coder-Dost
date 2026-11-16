function initCounter() {
    let count = 0;
    return function() {
        return count++;
    }
}

let counter = initCounter();
console.log(counter());
console.log(counter()); 

console.log("======================================================");

let counter1 = initCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());