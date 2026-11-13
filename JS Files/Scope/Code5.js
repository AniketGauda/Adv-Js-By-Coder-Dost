// var (Function scope, Reassignable, Redeclarable)
// In Modern day Js, we don't use var because it has some issues like it is function scoped and not block scoped. 
// So, it can be accessed outside of its block scope which can lead to unexpected behavior in the code. 
// So, we use let and const instead of var.

// One of the main issue is var is hoisted so we can access the variable even before declaring.

console.log('Value of Y: ', y); // It will print undefined because var is hoisted and initialized with undefined.
var y;

z = 5;
console.log('Value of Z: ', z); // It will print 5 because var is hoisted and initialized with undefined.
var z;

// var vs let

for(let i=0; i<5; i++) {
    setTimeout(() => {
        console.log(i+1);
    }, i * 1000);
}

for(var i=0; i<5; i++) {
    setTimeout(() => {
        console.log(i+1);
    }, i * 1000);
}