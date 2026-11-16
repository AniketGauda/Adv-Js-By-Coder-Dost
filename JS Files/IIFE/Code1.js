// IIFE - Immediately Invoked Function Expression

(function() {
    var x = 1;
    console.log('Value of x is : ', x);
})();

(function(a = 1) {
    var x = a;
    console.log('Value of x in 2nd function is: ', x);
})(7);