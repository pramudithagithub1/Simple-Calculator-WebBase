let resultField = document.getElementById("result");

function appendValue(value) {
    resultField.value += value;
}

function clearResult() {
    resultField.value = "";
}

function calculate() {
    const expression = resultField.value.trim();

    if (expression === "") {
        resultField.value = "Error";
        return;
    }

    try {
        
        if (/\/\s*0(?:\D|$)/.test(expression)) {
            resultField.value = "Cannot divide by zero";
            return;
        }

       
        if (!/^[0-9+\-*/.()\s]+$/.test(expression)) {
            resultField.value = "Invalid input";
            return;
        }

        const answer = eval(expression);

        if (!Number.isFinite(answer)) {
            resultField.value = "Error";
            return;
        }

        resultField.value = answer;
    } catch (error) {
        resultField.value = "Error";
    }
}
