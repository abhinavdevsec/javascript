let value = 3
let negativeValue = -value
// console.log(negativeValue);


let str1 ="Hello"
let str2 = "Abhi"

let str3 = str1 + " " + str2
 console.log(str3);


 console.log("1" + 2);
 console.log(1 + "2");
 console.log("1" + 2 + 2);  // this is a concept in javascript called type coercion, when we add a number to a string it will convert the number to string and then concatenate it with the string
 console.log(1 + 2 + "2");   // this are only the rules of operator precedence, first it will add 1 and 2 and then it will concatenate the result with the string "2"


console.log(+true);  // this is due to type coercion, when we use the unary plus operator on a boolean value it will convert it to a number, true is converted to 1 and false is converted to 0

console.log(+"");


let num1, num2, num3 

num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3);  // No need to write num1 = 2 + 2, num2 = 2 + 2, num3 = 2 + 2

 let gameCounter = 100
 ++gameCounter
console.log(gameCounter);
