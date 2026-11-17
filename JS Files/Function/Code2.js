// Named Function Expression

let sayHello = function fx(user) {
    if(user) {
        return "Hello " + user;
    } else {
        return fx('anonymous');
    }
}

let sayHi = sayHello;
sayHello = null;
console.log(sayHi())