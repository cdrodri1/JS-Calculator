//Javascript & jQuery
//11-24-17

const buttons = document.getElementByClassName("button");
const displayscreen = document.querySelector(".displayscreen > p")
let value1 =""
let value2 =""
let operator=""

let value = function() {
  for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      let inner =event.target
      if (inner.className === "number") {
          if (value1.length <= 22) {
        value1 +=inner.innerHTML
        screendisplay.innerHTML = value1;
          }
      } else if (inner.className === "operator") {
        if (value2 ==="") {
          value2 = value1
          value1 =""
          operator = inner.innerHTML
        } else {
          calc = calculate(operator, value1, value2)
          operator = inner.innerHTML;
          value1 = "";
          displayscreen.innerHTML = calc;
          value2 = calc;
        }
      } else if (["on", "clear"].includes(inner.className)) {
        value1 ="";
        value2 ="";
        displayscreen.innerHTML = "MemCleared";
        
