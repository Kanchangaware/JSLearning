console.log("****step 1*****");
function showMyName() {
  console.log("My name is: Kanchan Gaware ");
}
showMyName(); 
function showFullName(){
  console.log("My Full name is: Kanchan Shaligram Gaware");
}
showFullName();

console.log("****step 2*****");
function showPersonalDetails() {
  console.log("firstName: Kanchan","lastName:Gaware", "collegeName:SICA");
}
showPersonalDetails();
console.log("****step 3*****");
var name1 = "Virat";
var name2 = "Anushka";

var num1 = "1000"; 
var num2 = "2000"; 


function swapValuesDude(name1, name2) {
  console.log("Before Swap:", name1, name2);
  var temp = name1;
  name1 = name2;
  name2 = temp;
  console.log("After Swap:", name1, name2);
  return "Swapping variable successfully completed";
}


var swapResult = swapValuesDude(name1, name2);
console.log(swapResult);
var swapResult1 = swapValuesDude(num1, num2);
console.log(swapResult1);
console.log("****step 4****");

function addThreeValue(num1, num2, num3) {
  var Sum = num1 + num2 + num3;
  console.log(Sum);
  return Sum;
}
//var sumResult = addThreeValue(10.23, 600, 40);
//console.log(sumResult);
addThreeValue(10.23,600,40);
addThreeValue("Hello","Good", "Morning");



