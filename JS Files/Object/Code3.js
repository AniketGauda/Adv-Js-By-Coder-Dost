// Deep Copy

// It can copy upto many levels but not fully solve the problem

let obj = {
    name: 'Aniket',
    age: 26,
    occupation: 'Software Developer',
    address: {
        area: 'BTM-Layout',
        city: 'Bengaluru',
        state: 'Karnataka'
    }
}

obj.me = obj;
let sObj = JSON.parse(JSON.stringify(obj));

sObj.address.pincode = '497451';

console.log('OBJ:: ', obj);
console.log('COPIED OBJ:: ', sObj);
