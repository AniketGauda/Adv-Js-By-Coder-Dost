// Object

// Basic Behaviour

let person = {
    name: 'John',
}

let human = person;

// in this case human & person is pointing to same memory location
// person --------------------> obj ref
// human ---------------------> obj ref

person = {
    name: "Wick"
}

// now person is pointing to a different reference / memory location
// person ----------------------> diff obj ref
// human -----------------------> obj ref

// Nested Objects

let people = {
    name: 'John',
    address: {
        city: 'San Francisco',
        state: 'Ohio'
    }
}

// people -------------------------------> Object
// Object_address -----------------------> addressObject