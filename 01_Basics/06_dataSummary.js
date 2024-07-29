// Premitive
// all the premitives are call by value.
// 7 Types of premitive: --->  String, Number, Boolean, null, undefined, Symbool, BigInt



//Reference Type or Non-Premintive
// Types: Array, Objects, Functions

// Array----->
const heros = ["Shaktiman","NaagRaj", "Haatim"]

// Object----> 
let myObj = {
    name: "Ansh",
    age: 21,
}

const result = function myFun(a,b) {
    return a**b;
}
const myFunction = function(){
    console.log("Hello World!!");
}



//To checking data type use 
// console.log(typeof VariableName);

console.log(typeof heros);


// ******************************************************

//             Memory 
//  Stack(Premitive) --->  They create copy
//  Heap (Non-Prmitive)---> they give the reference of original value

//   **********************************************************


// Example 1-->
 let userOne = {
    email: "abc@google.com",
    age: 23
 };
 let userTwo = userOne;
 userTwo.email = "xyz@gmail.com";

 console.log(userOne);
 console.log(userTwo);

 // Example 02--->
 let myChannel = "ekChamachAssma";
 let anotherName = myChannel;
 anotherName = "Noteskarts";
 console.log(myChannel);
 console.log(anotherName);