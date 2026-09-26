let resultField = document.getElementById("result");

function appendValue(value) {
    resultField.value += value;
}

function clearResult() {
    resultField.value = "";
}

function calculate() {
    try {
        const expression = resultField.value;

        if (expression.trim() === "") {
            resultField.value = "Error";
            return;
        }

        if (/\/\s*0(?:\D|$)/.test(expression)) {
            resultField.value = "Cannot divide by zero";
            return;
        }

        resultField.value = eval(expression);
    } catch (error) {
        resultField.value = "Error";
    }
}
