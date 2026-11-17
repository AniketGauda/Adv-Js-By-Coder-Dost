function sayHi() {
    return `Hello, ${this.name}`
}

sayHi();

let obj1 = {name: 'John'}
let obj2 = {name: 'Mary'}

obj1.say = sayHi;
obj2.say = sayHi;

console.log(obj1.say());
console.log(obj2.say());

// Arrow function don't have a "this", it have a outer context

let person = {
    name: "Aniket",
    greet: () => {
        return "Hi " + this.name
    }
}

console.log(person.greet())