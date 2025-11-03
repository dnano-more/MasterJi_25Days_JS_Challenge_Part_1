// if statement

// if condition is true then code in a block will be execute otherwise not.
if (true) {
    console.log("I am executed..!")
}

if (false) {
    console.log("I am not executed..!")
}


const isUserLoggedIn = true
if (isUserLoggedIn) {
    console.log("User is logged in..!")
}


/** 
* Condition Operators
** < (less than) 
** > (greater than) 
** >= (greater than or equalto) 
** <= (less than or equalto) 
** == (loose equalto) 
** === (strict equalto) 
** != (loose not equalto) 
** !== (strict not equal) 
*/

const temprature = 30

if (temprature > 20) {
    console.log("Temprature is less than 50..!");
} else {
    console.log("Temprature is greater than 50..!");
}
// console.log("Temprature is greater than 50..!");

// True ko condition chek karna aa gaya but agar condition flase ho to else ka use karte hain ham
if (temprature > 60) {
    console.log("Temprature is less than 50..!");
} else {
    console.log("Temprature is greater than 50..!");
}

//sope 
const score = 200

if (score > 100) {
    let power = "fly"
    // console.log(`User power: ${power}`);

    var shakti = "Udna"
}
// console.log(`User power: ${power}`);  // Its gives ReferenceError
console.log(`User power: ${shakti}`);  // But var is accesible


// Shorthand notation of 'if statement'
const balance = 1000
if (balance > 500) console.log('Balance is full');  // It is a implicite scope example.

if (balance > 500) console.log('Balance is full'), console.log('balance is blah blah');  // This type of fancy code will works but it considerd as bad practice — Always prefer {} for clarity, especially when multiple statements are there.


// Nested if-else
const marks = 85

if (marks >= 95) {
    console.log("Grade A");
} else if (marks >= 90) {
    console.log("Grade B");
} else if (marks >= 80) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}
// Output: Grade C


// real use case example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {    // If all conditions are true then code will be executed otherwise skiped
    console.log("Allow to buy course"); 
}

if(loggedInFromGoogle || loggedInFromEmail) {   // If any one condition are true then code will be executed -//-
    console.log("User logged in..!"); 
} 