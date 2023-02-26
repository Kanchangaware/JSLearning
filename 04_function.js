function display(num) {
  console.log(num);
  var result = typeof num;
  return result;
}
var displayResult = display(100);
console.log(displayResult);

//funcation with no arguments and no return value
function showFullName() {
  console.log("My full name is: Kanchan Gaware ");
}
showFullName(); //function call or invoke
//function with no arguments and return value
function showAge(age) {
  console.log("My age is:", age);
}
showAge(23);
//function with no argurment and with return value
function fullName() {
  var name = "Kanchan gaware ";
  return name;
}
var fName = fullName();
console.log(fName);
//function with argurment and return value
function sumOfNumbers(num1, num2, num3, num4) {
  var Sum = num1 + num2 + num3 + num4;
  return Sum;
}
var sumResult = sumOfNumbers(12, 34, 65, 98);
console.log(sumResult);

var num1 = "100";
var num2 = "200";

var str1 = "Sweety"; 
var str2 = "cutey";

var name1 = "kanchan";
var name2 = "soniya";

var Sub1 = "Math";
var Sub2 = "JS";

function swapVariables(value1, value2) {
  console.log("Before Swap:", value1, value2);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log("After Swap:", value1, value2);
  return "Swapping variable successfully completed";
}
var swapResult = swapVariables(num1, num2); //function call or function invoke
console.log(swapResult);
var swapResult1 = swapVariables(str1, str2);
console.log(swapResult1);
var swapResult2 = swapVariables(name1, name2);
console.log(swapResult2);
var swapResult3 = swapVariables(Sub1, Sub2);
console.log(swapResult3);
