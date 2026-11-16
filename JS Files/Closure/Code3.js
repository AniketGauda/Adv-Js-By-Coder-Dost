// Lexical Environment and Closure

function init() {
    let name = "John";

    function greet() {
        console.log(name);
    }

    return greet;
}

let sayHi = init();
sayHi();