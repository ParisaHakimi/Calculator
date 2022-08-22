var displayDiv = document.querySelector("#display");
// displayDiv.innerText = "Some new value";

var numbers = document.querySelectorAll(".num");

function press(val) {
  displayDiv.value = val;
  displayDiv.innerText = displayDiv.value;
  console.log(displayDiv.value);
}

function setOP(operat) {
  document.querySelector(".operator").value += operat;
  console.log(document.querySelector(".operator").value);
}
function calculate() {
  var equal = document.querySelector("#equals");

  displayDiv.innerText = equal.value;
}
