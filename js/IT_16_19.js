let operationButtons = document.getElementsByClassName("operation-button");
let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function makeOperation(operationCode) {

    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    if (operationCode === "+") {
        var result = number1 + number2;
    } else if (operationCode === "-") {
        var result = number1 - number2;
    } else if (operationCode === "*") {
        var result = number1 * number2;
    } else if (operationCode === "/") {
        var result = number1 / number2;
    } else if (operationCode === "%") {
        var result = number1 % number2;
    } else {
        window.alert("operation is unknown");
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    //debugger;
    let clickElement = eventObject.currentTarget;
    let operation = clickElement.innerHTML;
    makeOperation(operation);
}

for (let i = 0; i < operationButtons.length; i++) {
    let button = operationButtons[i];
    button.addEventListener("click", onOperationButtonClick);
}
