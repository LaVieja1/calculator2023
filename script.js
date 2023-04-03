/// UI
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const backspace = document.querySelector('.del');

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

clear.addEventListener("click", function() {
    currentValue = '';
    previousValue = '';
    operator = '';
    screenCurrent.value = '';
    screenPrevious.value = '';
})

backspace.addEventListener("click", function() {
    del();
})

equal.addEventListener("click", function() {

    if (currentValue != '' && previousValue != '') {
        calculate();
        screenPrevious.value = '';
        if (previousValue.length <= 8) {
            screenCurrent.value = previousValue;
        } else {
            screenCurrent.value = previousValue.slice(0, 8) + "...";
        }
    }

});

/// FUNCIONES

function handleNumber(num) {
    if (currentValue.length <= 8) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === 'x') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();

    currentValue = previousValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function del() {
    currentValue = currentValue.slice(0, -1);
    screenCurrent.value = currentValue;
}
