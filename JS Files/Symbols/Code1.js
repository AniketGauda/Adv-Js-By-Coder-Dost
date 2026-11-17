// Symbol

// JS also has a symbol data-type.
// generally used as property name in object.
// Object can have 2 types of properties i.e. string & symbol.
// if you put any other data-type it'll convert it into string.

let person = {
    0: "Ricky",
    sayHi: function() {
        return "Hi " + this.name
    }
}

console.log(person["0"]);

const id = Symbol("id");
const idx = Symbol("id");

let obj = {
    name: "Samuels",
    [id]: 74,
    [idx]: 99
}

console.log(obj[idx]);

// It don't wotk for for-in loop & Object.keys()