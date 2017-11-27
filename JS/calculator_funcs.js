//All Calculator Functions
//11-24-17

function add (x,y) {
  return Number(x) + Number(y);
};
function subtract(x,y){
  return Number(x) - Number(y);
};
function multiply(x,y){
  return Number(x)*Number(y);
};
function divide(x,y){
  return Number(x)/Number(y);
};
function operatordetec(operator, value1, value2){
  switch (operator){
    case "+":
      return add(value1,value2);
    case "-":
      return subtract(value1,value2);
    case "X":
      return multiply(value1,value2);
    case "/":
      return divide(value1,value2);
  }
}
