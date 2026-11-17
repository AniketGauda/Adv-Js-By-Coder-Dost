// Copying of Objects...

// Shallow Copy.
// Only the Upper layer is copied properly, the nested layers reference got copied.
// Many ways to create shallow copy but 2 prominent ways are :- 
// 1) Object.assign (Use when target is already available cause it won't create a new reference)
// 2) Spread Operator

// Object.assign
// Basic Syntax: Object.assign(targetObj, sourceObj);
// It will return 
// {
//     ...targetObj,
//     ...sourceIbj
// }  & it's reference will be same as targetObj

const person = {
    name: 'John'
}

const newPerson = Object.assign({}, person);

// but Object.assign only do shallow copy.

const obj = {
    name: 'Aniket',
    age: 26,
    address: {
        city: 'Banglore',
        state: 'Karnataka'
    }
}

const newObj = Object.assign({}, obj);
newObj.address.area = 'Btm Layout'

console.log('OBJ:: ', obj.address);  // {city: 'Banglore', state: 'Karnataka', area: 'Btm Layout'}
console.log('NEW OBJ:: ', newObj.address);  //{city: 'Banglore', state: 'Karnataka', area: 'Btm Layout'}

// We added a new key in address in newObj but It's made changes in the old obj also cause due to shallow copy
// newObj has the same reference of address which obj have.

const data = {
    name: "Aniket",
    designation: "Mobile App Developer",
    projects: {
        ks: "ukraine",
        ipos: "indonesia",
        oq: "qatar",
        oa: "algeria"
    }
}

const sData = {...data};
sData.projects.france = "djeezy";

console.log('DATA:: ', data);
console.log('SPREAD DATA:: ', sData);