/// UI
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const screenCurrent = document.querySelector('#result');
const screenPrevious = document.querySelector("#result-previous");

let currentValue = '';
let previousValue = '';
let operator = '';

/// EventListeners

numbers.forEach((number) => number.addEventListener("click", function(e) {
    handleNumber(e.target.textContent);
    screenCurrent.value = currentValue;
}));

operators.forEach((op) => op.addEventListener("click", function(e) {
    handleOperator(e.target.textContent);
    screenPrevious.value = previousValue + " " + operator;
    screenCurrent.value = currentValue;
}));


/// FUNCIONES

function handleNumber(num) {
    if (currentValue.length <= 6) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

/*
function insert(value) {
    if (value == "+") {
        previousValue = currentValue;
        currentValue = '';
        operator = "+";
    } else if (value == "-") {
        previousValue = currentValue;
        currentValue = '';
        operator = "-";
    } else if (value == '*') {
        previousValue = currentValue;
        currentValue = '';
        operator = "*";
    } else if (value == '/') {
        previousValue = currentValue;
        currentValue = '';
        operator = "/";
    } 

    currentValue += value;
    screenCurrent.value = currentValue;
}
*/

function clearScreen() {
    currentValue = '';
    screenCurrent.value = '';
    screenPrevious.value = '';
    previousValue = "";
    operator = "";
}

function del() {
    currentValue = currentValue.slice(0, -1);
    screenCurrent.value = currentValue;
}


function add(a, b) {
    previousValue = a + b;
    currentValue = '';
    screenCurrent.value = previousValue;
}

function subtract(a, b) {
    previousValue = a - b;
    currentValue = '';
    screenCurrent.value = previousValue;
}

function multiply(a, b) {
    previousValue = "";
    currentValue = a * b;
    screenCurrent.value = currentValue;
}

function divide(a, b) {
    previousValue = "";
    currentValue = (a / b);
    screenCurrent.value = currentValue;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+' :
            return add(a, b);
        case '-' :
            return subtract(a, b);
        case '*' :
            return multiply(a, b);
        case '/' :
            if (b == 0) return null;
            return divide(a, b);
        default:
            return null;
    }
}