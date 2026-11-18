// If you try to use this on a method of object, this approach can fail.

let task = {
    name: 'demo',
    heavy: function(x) {
        console.log(x + ":heavy:" + this.name);
        return x + ":heavy:" + this.name;
    }
}

function memoizedFx(fx) {
    let map = new Map();
    return function(x) {
        if(map.has(x)) {
            return map.get(x);
        } else {
            let val = fx.call(this, x);
            map.set(x, val);
            return val;
        }
    }
}

task.heavy(1);
task.memoizedHeavy = memoizedFx(task.heavy);
task.memoizedHeavy(1);

// we will solve this issue by using function methods (i.e. call, apply or bind)