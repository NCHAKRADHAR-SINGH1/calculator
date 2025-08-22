let display = document.getElementById("display");
let currentInput = "";

function appendValue(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "";
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
    } catch {
        display.innerText = "Error";
        currentInput = "";
    }
}

