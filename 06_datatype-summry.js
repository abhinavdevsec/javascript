// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Because variable ka type declare karna zaroori nahi hota, aur runtime par type change bhi ho sakta hai (Dynamically typed).

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol( '123')
const anotherId = Symbol( '123' )

console.log(id === anotherId);  // false

const BigInt = 3456787578864675n

// Reference (Non primitive)

//Array, Objects, Functions


// Function return is ==> object function
// Array return is ==> function object
// Object return is ==> function object


 const hero = ["Goku", "Vegita", "Gohan"];  // Array

 let myObj = {  // Object
    name: "abcd",
    age: 9,

 }

 const myFunction = function(){
    console.log("Hello world");  // Function using variable
 }

 console.log(typeof outsideTemp); // All non primitive type return type is object