// "this" keyword & it's working functionality
// Methods

let person = {
    name: 'John',
    sayHi: function() {
        return "Hi"
    }
}

console.log(person.sayHi());

// Methods can also access the properteis & other methods of same object.
// To do this we use "this"

let obj = {
    name: "Aniket",
    sayHi: function() {
        return `Hi ${this.name}`
    }
}

console.log(obj.sayHi());
