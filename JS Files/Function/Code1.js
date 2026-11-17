// Functions

// Functions are objects

function fun(greet, ...rest) {
    return greet;
}

// console.log(fun.name);
// console.log(fun.length);

fun.count = 0;
fun.count+=10;
// console.log(fun.count);

// Function declaration is hoisted.

// Function can be called as constructor

function Person(name) {
    this.name = name;
}

const p = new Person("Aniket");

console.log('NAME:: ', p.name);