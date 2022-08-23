// var displayDiv = document.querySelector("#display");
// var operatorValue = document.querySelector(".operator").value;
// var decimal = document.querySelector(".decimal");
// var numbers = document.querySelectorAll(".num");
// console.log(numbers);

// function press(val) {
//   displayDiv.value = val;
//   displayDiv.innerText = displayDiv.value;
// }

// function calculate() {
//   let x = displayDiv.value;
//   let y = eval(x);
//   console.log(y);

//   displayDiv.value = y;
//   // console.log(y);
//   return y;
// }

// function setOP(operat) {
//   displayDiv.value = operat;
//   displayDiv.innerText = displayDiv.value;
//   console.log(displayDiv.innerText);
// }

// function calculate() {
//   numbers.forEach((number) => {
//     console.log(typeof number);
//     var number1 = parseFloat(number.value);
//     var number2 = parseFloat(number.value);
//     console.log(number1);
//     console.log(number2);
//     if (operatorValue == "+") {
//       result = number1 + number2;
//     } else if (operatorValue == "-") {
//       result = number1 - number2;
//     } else if (operatorValue == "*") {
//       result = number1 * number2;
//     } else {
//       result = number1 / number2;
//     }
//     console.log(result);
//   });
// }
// function clr() {
//   displayDiv.value = "";
// }

const calculator = document.getElementById("calculator");
const keys = calculator.querySelectorAll(".calculator-keys");
const display = document.getElementById("display");
keys.forEach((keyy) => {
  keyy.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;
      const previousKeyType = calculator.dataset.previousKeyType;

      if (!action) {
        if (displayedNum === "0" || previousKeyType === "operator") {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedNum + keyContent;
        }
        calculator.dataset.previousKeyType = "number";
      }
      if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divid"
      ) {
        // key.classList.add(".operator-key-hover");
        calculator.dataset.previousKeyType = "operator";
        calculator.dataset.firstNum = displayedNum;
        calculator.dataset.operator = action;
      }
      if (action === "decimal") {
        if (!displayedNum.includes(".")) {
          display.textContent = displayedNum + ".";
        } else if (previousKeyType === "operator") {
          display.textContent = "0.";
        }
        calculator.dataset.previousKeyType = "decimal";
      }
      if (action === "clear") {
        display.textContent = "0";
        key.textContent = "AC";
        calculator.dataset.previousKeyType = "clear";
      }
      if (action === "calculate") {
        const firstNum = calculator.dataset.firstNum;
        const operator = calculator.dataset.operator;
        const secondNum = displayedNum;
        const claculate = (n1, operator, n2) => {
          let result = "";
          if (operator === "add") {
            result = parseFloat(n1) + parseFloat(n2);
          } else if (operator === "subtract") {
            result = parseFloat(n1) - parseFloat(n2);
          } else if (operator === "multiply") {
            result = parseFloat(n1) * parseFloat(n2);
          } else if (operator === "divid") {
            result = parseFloat(n1) / parseFloat(n2);
          }
          calculator.dataset.previousKeyType = "calculate";

          return result;
        };
        display.textContent = claculate(firstNum, operator, secondNum);
      }
    }
  });
});
