/*let currentInput = "";
let currentOperator = "";
let storedInput = "";

function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === "=") {
    performCalculation();
  } else if (buttonValue === "C") {
    clearCalculator();
  } else {
    updateDisplay(buttonValue);
  }
}

function performCalculation() {
  const inputNum = parseFloat(currentInput);
  const storedNum = parseFloat(storedInput);

  switch (currentOperator) {
    case "+":
      currentInput = storedNum + inputNum;
      break;
    case "-":
      currentInput = storedNum - inputNum;
      break;
    case "*":
      currentInput = storedNum * inputNum;
      break;
    case "/":
      currentInput = storedNum / inputNum;
      break;
    default:
      break;
  }

  updateDisplay(currentInput);
  currentOperator = "";
  storedInput = "";
}

function updateDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearCalculator() {
  currentInput = "";
  currentOperator = "";
  storedInput = "";
  document.getElementById("display").value = "";
}
*/

let outputScreen = document.getElementById("output-screen");
function display(num) {
  outputScreen.value += num;
}
