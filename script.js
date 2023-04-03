/// UI
const screen = document.querySelector('#result');


let expression = '';
let firstNumber;
let secondNumber;
let operator;

/// FUNCIONES

function insert(value) {
    expression += value;
    screen.value = expression;
}

function clearScreen() {
    expression = '';
    screen.value = '';
}

function del() {
    expression = expression.slice(0, -1);
    screen.value = expression;
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}