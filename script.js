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
        return result;
      };

      if (!action) {
        if (
          displayedNum === "0" ||
          previousKeyType === "operator" ||
          previousKeyType === "calculate"
        ) {
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
        const firstNum = calculator.dataset.firstNum;
        const operator = calculator.dataset.operator;
        const secondNum = displayedNum;
        // key.classList.add(".operator-key-hover");
        if (
          firstNum &&
          operator &&
          previousKeyType !== "operator" &&
          previousKeyType !== "calculate"
        ) {
          const CalcNum = claculate(firstNum, operator, secondNum);
          display.textContent = CalcNum;
          // update calculated value as firstNum
          calculator.dataset.firstNum = CalcNum;
        } else {
          // if there are no calculation, set displayedNum as the firstNum
          calculator.dataset.firstNum = displayedNum;
        }
        calculator.dataset.previousKeyType = "operator";
        calculator.dataset.operator = action;
      }
      if (action === "decimal") {
        if (!displayedNum.includes(".")) {
          display.textContent = displayedNum + ".";
        } else if (
          previousKeyType === "operator" ||
          previousKeyType === "calculate"
        ) {
          display.textContent = "0.";
        }
        calculator.dataset.previousKeyType = "decimal";
      }
      if (action === "clear") {
        if (key.textContent === "AC") {
          calculator.dataset.firstNum = "";
          calculator.dataset.modifierNum = "";
          calculator.dataset.operator = "";
          calculator.dataset.previousKeyType = "";
        } else {
          key.textContent = "AC";
        }
        display.textContent = 0;
        calculator.dataset.previousKeyType = "clear";
      }

      if (action === "calculate") {
        let firstNum = calculator.dataset.firstNum;
        const operator = calculator.dataset.operator;
        const secondNum = displayedNum;
        if (firstNum) {
          if (previousKeyType === "claculate") {
            firstNum = displayedNum;
            secondNum = calculator.dataset.modifierNum;
          }
          display.textContent = claculate(firstNum, operator, secondNum);
        }
        calculator.dataset.modifierNum = secondNum;
        calculator.dataset.previousKeyType = "calculate";

        // display.textContent = claculate(firstNum, operator, secondNum);
      }
    }
  });
});
