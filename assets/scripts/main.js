/* This function adds numbers on the page */
function addNums() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var total = addTwoNumbers(num1, num2);
  document.getElementById('result').innerHTML = total;
}

function addTwoNumbers(number1, number2) {
  console.log("I am adding two numbers together");
  return parseInt(number1) + parseInt(number2);
}