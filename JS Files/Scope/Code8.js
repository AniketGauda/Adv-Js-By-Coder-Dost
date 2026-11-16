// Function Scope: It creates upon the execution of a function.

function sayHi(name) {
    return `Hi ${name}`;
}

sayHi('Coder Dost'); // This will create a function scope for var name

sayHi('Virat'); // This will create another function scope


// Lexical Environment: It is the combination of a function and the lexical scope 
// within which that function was declared.

// let name = 'John';

// function sayHello() {
//     let greet = "Hi";
//     console.log(`${greet}`);
// }

// sayHello();
// console.log(name, sayHello);

let _name = "John";

function sayHello() {
    let greet = "Hi";
    console.log(_name);
}

sayHello();