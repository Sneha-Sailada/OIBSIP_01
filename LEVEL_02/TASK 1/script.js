const darkTheme = "styles/style.css";
const moonIcon = "assets/MoonIcon.svg";
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

// *******Displays entered value on screen*******
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

//*******Adding event handler on the document to handle keyboard inputs*******
document.addEventListener("keydown", keyboardInputHandler);

//*******function to handle keyboard inputs*******
function keyboardInputHandler(e) {
  e.preventDefault();

  //*******Numbers*******
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //*******Operators*******
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //*******Decimal key*******
  if (e.key === ".") {
    res.value += ".";
  }

  //*******Press enter to see result*******
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //*******Backspace for removing the last input*******
  if (e.key === "Backspace") {
    const resultInput = res.value;
    res.value = resultInput.substring(0, res.value.length - 1);//*******Remove the last element in the string*******
  }
}