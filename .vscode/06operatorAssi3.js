console.log("===1===");
var num1=10;
var num2=12;
var result = num1>num2? num1:num2;
console.log( result);

var num1=800;
var num2=899;
var result = num1>num2? num1:num2;
console.log(result);

console.log("===2===");
var isEvenOrOddNum=29;
var result=isEvenOrOddNum%2==0?"EVEN":"ODD";
console.log("29 is:",result);

var isEvenOrOddNum=44;
var result=isEvenOrOddNum%2==0?"EVEN":"ODD";
console.log("44 is:",result);

var isEvenOrOddNum=40;
var result=isEvenOrOddNum%2==0?"EVEN":"ODD";
console.log("0 is:",result);

var isEvenOrOddNum=101;
var result=isEvenOrOddNum%2==0?"EVEN":"ODD";
console.log("101 is:", result);

function wordLength(word) {
    var wordLength= word.length;
    var result = wordLength%2==0?"EVEN":"ODD";
  return result;
}
var result = wordLength("JavaScript");
console.log(`Word"JavaScript" has${result}length`);
console.log(`word"Google" has ${wordLength("Google Chrome")}length`);

