function initCounter(id) {
    let count = 0;
    return function() {
        count++;
        document.getElementById(id).innerText = count;
    }
}

let counter1 = initCounter('btnCount1');
let counter2 = initCounter('btnCount2');

function initAddressString(inputId, outputId) {
    let str = '';
    return function() {
        str += ' ' + document.getElementById(inputId).value;
        document.getElementById(inputId).value = "";
        document.getElementById(outputId).innerText = str;
    }
}

let strAdder1 = initAddressString('text1', "text-output-1");
let strAdder2 = initAddressString('text2', 'text-output-2');