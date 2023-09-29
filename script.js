let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        displayValue = 'Error';
        document.getElementById('display').innerText = displayValue;
    }
}