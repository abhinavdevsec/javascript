let score = 33

console.log(typeof score);      // null value is zero 
console.log(typeof score);       // true value is one

let valueInNumber = Number(score);  // convert boolean to number
console.log(typeof valueInNumber);
console.log(valueInNumber);   

// "33" => 33
// "33abc" => NaN
//true => 1; false => 0


let isLoggedIn = " ";
let booleanIsLoggedIN = Boolean(isLoggedIn);  // convert string to boolean
console.log(booleanIsLoggedIN);  // true

// null => false
// undefined => false
// string => true
// 0 => false
// 1 => true
// "" => false
// " " => true


let someNumber = 5
let stringNumber = String(someNumber);  // convert number to string
console.log(stringNumber);
console.log (typeof stringNumber);  // "2" => "2"