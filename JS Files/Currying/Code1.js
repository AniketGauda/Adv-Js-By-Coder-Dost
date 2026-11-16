// Currying & Curried Function

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sum(2)(4)(6));

let sum2 = a => b => c => a + b + c;

console.log(sum2(1)(4)(5));


let log = time => type => msg => `At ${time}: Severity ${type} => ${msg}`
const time = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
console.log(log(time)('error')('power not sufficient'));