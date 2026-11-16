function createUser(name) {
    let greeting = 'Hi';
    function greet() {
        return greeting + ' ' + name + " is Created";
    }
    return greet;
}

// Closure is a combination of a function and its lexical environment within which that function was declared. 
// In other words, a closure gives you access to an outer function’s scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.

// let welcomeJohn = createUser('John');
// console.log(welcomeJohn());

let welcomeJack = createUser('Jack');
console.log(welcomeJack());