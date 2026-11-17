// Structured Clone Api

// To do actual deep copy, we can use structured clone (available only for modern node)
// Although it has it's limitation too but Extremly safe for JSON POV.

const person = {
    name: "Aniket",
    age: 26,
    address: {
        area: "BTM-Layout",
        city: "Bengaluru",
        state: "Karnataka"
    }
}

person.me = person; // circular reference

let dPerson = structuredClone(person);

console.log('PERSON::: ', person);
console.log('D COPY PERSON:: ', dPerson);