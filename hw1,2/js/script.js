//TASK 1
// This is an in-line comment.
/* This is a
multi-line comment */



//TASK 2
var myName;



//TASK 3
// Setup
var a;

// Only change code below this line
a = 7;



//TASK 4
// Setup
var a;
a = 7;
var b;

// Only change code below this line
b = a;



//TASK 5
var a = 9;



//TASK 6
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";



//TASK 7
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;



//TASK 8
var sum = 10 + 10;



//TASK 9
var difference = 45 - 33;



//TASK 10
var product = 8 * 10;



//TASK 11
var quotient = 66 / 33;



//TASK 12
var myVar = 87;

// Only change code below this line
myVar++;



//TASK 13
var myVar = 11;

// Only change code below this line
myVar--;



//TASK 14
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7;



//TASK 15
var product = 2.0 * 2.5;



//TASK 16
var quotient = 4.4 / 2.0; // Change this line



//TASK 17
// Only change code below this line

var remainder = 11 % 3;



//TASK 18
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;



//TASK 19
var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;



//TASK 20
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;



//TASK 21
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;



//TASK 22
var myFirstName = "Vladyslav";
var myLastName = "Olizarenko";



//TASK 23
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line



//TASK 24
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';



//TASK 25
var myStr = 'FirstLine\n\t\\SecondLine\nThirdLine'; // Change this line



//TASK 26
var myStr = "This is the start. " + "This is the end."; // Change this line



//TASK 27
// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";



//TASK 28
// Only change code below this line
var myName = "Vladyslav";
var myStr = "My name is " + myName + "and I am well!";



//TASK 29
// Change code below this line

var someAdjective = "YOLO";
var myStr = "Learning to code is ";
myStr += someAdjective;



//TASK 30
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;



//TASK 31
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line



//TASK 32
// Setup
var myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line



//TASK 33
// Setup
var lastName = "Lovelace";
// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line



//TASK 34
// Setup
var lastName = "Lovelace";
// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line



//TASK 35
// Setup
var lastName = "Lovelace";
// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line



//TASK 36
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
// Only change code below this line
var wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line



//TASK 37
// Only change code below this line
var myArray = ["string", 1];



//TASK 38
// Only change code below this line
var myArray = [["Bulls", 23], ["White Sox", 45]];



//TASK 39
var myArray = [50,60,70];
var myData = myArray[0];



//TASK 40
// Setup
var myArray = [18,64,99];

// Only change code below this line
myArray[0] = 45;



//TASK 41
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];



//TASK 42
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
myArray.push(["dog", 3]);



//TASK 43
// Setup
var myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
var removedFromMyArray = myArray.pop();



//TASK 44
// Setup
var myArray = [["John", 23], ["dog", 3]];
// Only change code below this line
var removedFromMyArray = myArray.shift();



//TASK 45
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]);



//TASK 46
var myList = [["Chocolate Bar", 15], ["Cheese", 1], ["Bread", 2], ["Tea", 4], ["Pumpkins", 3]];


//TASK 47
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();



//TASK 48
function functionWithArgs(firstNum, secondNum) {
    console.log(firstNum + secondNum);
}
functionWithArgs(1,2);
functionWithArgs(7,9);



//TASK 49
// Declare the myGlobal variable below this line
var myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}



//TASK 50
function myLocalScope() {
    // Only change code below this line
    var myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);



//TASK 51
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";
  
  // Only change code above this line
  return outerWear;
}

myOutfit();



//TASK 52
function timesFive(num) {
    return num * 5;
}
var answer = timesFive(0);
var answer = timesFive(2);
var answer = timesFive(5);



//TASK 53
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();



//TASK 54
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);



//TASK 55
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));