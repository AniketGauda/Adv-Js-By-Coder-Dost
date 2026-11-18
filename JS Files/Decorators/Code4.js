// Call, Apply & Bind

const person = {
    name: 'Aniket',
    age: 12,
    location: 'delhi'
}

function checkName(a, b) {
    return !!this.name
}

// call
console.log(checkName.call(person, 1, 2));

// apply
console.log(checkName.apply(person, [1, 2]));

// bind
let fx = checkName.bind(person);
console.log(fx());