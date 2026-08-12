let num1 = 0;
let num2 = 0;
let operator;

function add(a, b){
    let sum = a + b;
    return sum;

}

function subtract(a, b) {
    let difference = a - b;
    return difference;
}

function multiply(a, b){
    let product = a * b;
    return product;
}

function divide(a, b){
    let quotient = a / b;
    return quotient;
}

function operate(operator, num1, num2) {
    let outcome
    
    if (operator === "+") {
        outcome = add(num1, num2)

    }
    else if (operator === "-"){
        outcome = subtract(num1, num2)
    }
    else if (operator === "/"){
        outcome = divide(num1, num2)
    }
    else if (operator === "*"){
        outcome = multiply(num1, num2)
    }

    return outcome;
    

}