/// UI
const screen = document.querySelector('#result');


let expression = '';
let firstNumber;
let secondNumber;
let operator = '';

/// FUNCIONES

function insert(value) {
    if (value == "+") {
        firstNumber = expression;
        expression = '';
        operator = "+";
    } else if (value == "-") {
        firstNumber = expression;
        expression = '';
        operator = "-";
    } else if (value == '*') {
        firstNumber = expression;
        expression = '';
        operator = "*";
    } else if (value == '/') {
        firstNumber = expression;
        expression = '';
        operator = "/";
    } 

    expression += value;
    screen.value = expression;
    console.log(operator);
    console.log(expression);


}

function clearScreen() {
    expression = '';
    screen.value = '';
    firstNumber = "";
    operator = "";
}

function del() {
    expression = expression.slice(0, -1);
    screen.value = expression;
}


function add(a, b) {
    firstNumber = "";
    expression = a + b;
    screen.value = expression;
}

function subtract(a, b) {
    firstNumber = "";
    expression = a - b;
    screen.value = expression;
}

function multiply(a, b) {
    firstNumber = "";
    expression = a * b;
    screen.value = expression;
}

function divide(a, b) {
    firstNumber = "";
    expression = (a / b);
    screen.value = expression;
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