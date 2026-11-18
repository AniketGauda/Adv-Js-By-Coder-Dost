// Best Eg for memoization is Fibonacci Function.

function fib(n) {
    if(n == 0 || n == 1) {
        return n;
    }
    return finalFib(n-1) + finalFib(n-2);
}

function fibMemoized(fib) {
    let map = new Map();
    return function(n) {
        if(map.has(n)) {
            return map.get(n);
        } else {
            let result = fib(n);
            map.set(n, result);
            return result;
        }
    }
}

let finalFib = fibMemoized(fib);

console.log(finalFib(45));