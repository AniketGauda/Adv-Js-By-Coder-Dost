// Debouncing

/*
    - Run a function only when - if it has not been called again for a fixed period.
    - Suppose you are typing and take a pause of 1 second. Only then that function should be called.
*/

let count = 1;
function showCount() {
    count++;
    console.log({count});
}

function debounceFx(fx, timeInMs) {
    let id = null;
    return function (x) {
        if(id) {
            clearTimeout(id);
        } 
        id = setTimeout(fx, timeInMs, x);
    }
} 

let showCountId = debounceFx(showCount, 1000);

setTimeout(showCountId, 1000);
setTimeout(showCountId, 2200);
setTimeout(showCountId, 2500);   
setTimeout(showCountId, 5000);   

// Real Example

const el = document.getElementById("text1");
const logo = document.getElementById('text-output-1');

el.addEventListener(
    "keyup",
    debounceFx(function(e) {
        logo.innerText = e.target.value
    }, 1000)
)