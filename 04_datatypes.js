//Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol
//BigInt

// Reference (Non primitive)   // all non primitive datatype is object

// Array, Objects, Functions


 const score= 100
  const scoreValue = 100.3

  const isLoggedIn = false

  const outsideTemp = null  // data type is object
  let userEmail;

  const id = Symbol('123')
  const useAnotherId = Symbol('123')

  console.log(id===useAnotherId);

  const bigNumber = 345665347898655n


  const hero = ["Goku", "Naruto" , "vegita"];
 let myObj = {
  Name: "Abhinav",
  Age: 21,

  }


const myFunction = function(){  // data type is function
 console.log("Hello World");

};
console.log(hero);
console.log(myObj);
myFunction();

console.log(typeof bigNumber);

// https://tc39.es/ecma262/#sec-toprimitive