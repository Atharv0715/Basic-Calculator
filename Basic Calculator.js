const result = document.getElementById("result");

// Append value to display
function appendValue(value) {
  result.value += value;
}

// Clear display
function clearDisplay() {
  result.value = "";
}

// Delete last character
function deleteLast() {
  result.value = result.value.slice(0, -1);
}

// Calculate expression with error handling
function calculate() {
  try {
    let evalResult = eval(result.value);
    if (evalResult === Infinity || isNaN(evalResult)) {
      result.value = "Error";
    } else {
      result.value = evalResult;
    }
  } catch {
    result.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/", "."].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
