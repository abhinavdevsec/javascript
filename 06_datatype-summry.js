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


  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // MEMORY ==> 1.Stack(Primitive) When we declare a stack memory the varible we dicrade we get excat copy of it, 
 // 2.Heap(Non primitive) On the otherhand when we get decalre heap memory we get refrence of orignal value


 let myName = "Goku"

 let anothername = myName  // assining copy value 
 anothername = "vegita"

 console.log(myName);
 console.log(anothername);


 let userOne ={
   email: "user@google.com",
   upi: "user@ybl"
 };


 let userTwo = userOne  // assining refrence value 
   userTwo.email = "Goku@google.com"

   console.log(userOne.email);
   console.log(userTwo.email);

 