// Hoisting

// Function declarations & var are hoisted to the top of their scope, 
// meaning they can be called before they are defined in the code.
// but if you access a var before its declaration, it will return undefined, 
// while a function declaration can be called before its definition without any issues.

console.log('Value of a before declaration:', a); // undefined 
var a = 10;

sayHello(); // This will work because function declarations are hoisted

function sayHello() {
    console.log('Hello Coder Dost');
}

// But Function expressions and let/const are not hoisted, so they cannot be called before their definition.

greet();

let greet = function () {
    console.log('Hey Man');
}