// Decorators :- It's a design pattern in which you modify the functionality of a function
// By Covering it inside a wrapper.

// let modifiedFx = Decorator(preDefiedFunction)

// Memoization or Caching

function heavy(x) {
    console.log("Org ", x + ":heavy");
    return x + ":heavy";
}

// console.log(heavy(4));

function memoizer(fx) {
    let map = new Map();   // Hashmap Map { }
    return function(x) {
        if(map.has(x)) {
            console.log("Map ", x + ":heavy");
            return map.get(x);
        }
        else {
            let result = fx(x);
            map.set(x, result);
            return result;
        }
    }
}

let memoizedFx = memoizer(heavy);

memoizedFx(4);
memoizedFx(3);
memoizedFx(2);
memoizedFx(3);