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
      if (inner.className=== "number"") {
          if (value1.length <= 22) {
        value1
