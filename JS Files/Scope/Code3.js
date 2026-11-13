// const 
// Block scope, Not Reassignable, Not Redeclarable
// declarion must be initialized at the time of declaration otherwise 
// it will throw an error. (const a; // Uncaught SyntaxError: Missing initializer in const declaration)

const a = 10;
a = 20;
console.log('Value Of A:', a); 