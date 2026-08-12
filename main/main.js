let num1 = 0;
let num2 = 0;
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".calc-button");
const clearButton = document.querySelector("#clear");
let firstNumber = "";
let operator = "";
let secondNumber= "";

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = button.textContent;

        if (!isNaN(value)) {
            if(display.textContent === "0") {
                display.textContent = value;
            } else{
            display.textContent += value;
             }

             }
             else if (value === "."){
                if(!display.textContent.includes(".")) {
                    display.textContent += "."
                }

        }
        else if (value === "+" || value === "-" || value === "*" || value === "/" ){
            firstNumber = Number(display.textContent);
            operator = value;
            display.textContent = "";
        }

        else if (value === "="){
            secondNumber = Number(display.textContent);

            let result = operate(operator, firstNumber, secondNumber);
            display.textContent = result.toFixed(1);
        }

    });
});

clearButton.addEventListener("click", function() {
    display.textContent = "0";
    firstNumber = "";
    operator = "";
    secondNumber = "";

})

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

