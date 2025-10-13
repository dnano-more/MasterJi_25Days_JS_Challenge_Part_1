"use strict";  // treat all JS code as newer version

// alert(3+2)   // it only works on brower

// it works but dont write this type of code. its bad practice
console.log(2 + 4);  console.log("dnano")

console.log( 3 +
    3 + 4
    + 2
)


/* docs: Serach https://tc39.es/ecma262/ and https://developer.mozilla.org/en-US/docs/Web/JavaScript for refference.
 tc39 website pe apko JS ke specifications and standerts(rules) dekhne milte hain. */

// Lets see data types

let name = "dnano"
let age = 23
let isLoggedIn = false 

// number => 2 to the power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => not assinged value.
// symbol => unique (used for uniqueness)

// object 
// array
// function

// typeof operator - variable ke values ka type chek kar sakte hain isse
console.log(typeof undefined); // undefined
console.log(typeof null);  // object  (its a known nuance in javascript)

// console.table( [ typeof 8374, name, isLoggedIn, null, undefined, BigInt, [] ] );

console.log( typeof [8374, isLoggedIn, null, undefined] );  // object

console.log(typeof function name(params) {
    
});  // function

console.log(typeof undefined);  // undefined
console.log(typeof null);      // object
console.log(typeof BigInt);    // function
console.log(typeof Symbol);    // function

console.table([
  typeof 8374,         // "number"
  typeof name,         // depends on what 'name' is
  typeof isLoggedIn,   // depends on what 'isLoggedIn' is
  typeof null,         // "object" (quirk in JS)
  typeof undefined,    // "undefined"
  typeof BigInt(1),    // "bigint"
  typeof Object,       // "function"
  typeof [],            // "object"
  typeof Function       // "function"
]);