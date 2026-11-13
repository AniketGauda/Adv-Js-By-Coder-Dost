// 3 Types of Varibles in JS

// 1. var (Function Scope, Global Scope, Redeclarable, Reassignable)
// 2. let (Block Scope, Reassignable, Not Redeclarable)
// 3. const (Block Scope, Not Reassignable, Not Redeclarable)

// Global Scope: Variables declared outside of any function or block have global scope. 
// They can be accessed from anywhere in the code.
// Let's say in code1.js i decared var a = 10; then in code2.js i can access it as well.

let a = 100;

{
    let a = 200;
    a = 250; // Reassigning the value of a inside the block
    console.log('Value Of A Inside 1st Block:', a); // 250
}

{
    let a = 300;    
    console.log('Value Of A Inside 2nd Block:', a); // 300
}

console.log('Value Of A Outside Blocks:', a); // 100