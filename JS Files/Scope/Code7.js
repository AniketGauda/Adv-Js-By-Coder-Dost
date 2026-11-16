// global Object: The global object is a special object that provides access to global variables and functions. 
// In browsers, the global object is called 'window', while in Node.js, it is called 'global'. 
// The global object allows you to access and manipulate global variables and functions from anywhere in your code.

window.a = 112;
var b = 221; // var creates a property on the global object when declared in the global scope.

// Normal Function declaration also creates a property on the global object when declared in the global scope.
function fun() {
    console.log('Hello World :)');
    return 'Hello Universe :)';
}