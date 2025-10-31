
// this in object
const user = {
    username: "dnano",
    price: 999,

    welcomeMessage: function () {
        // 'this' means the current object (like in this case current obj is user)
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()  // dnano, welcome to website

user.username = 'manoj'
user.welcomeMessage()  // manoj, welcome to website

console.log(this);  // {}  (In node.js it will be empty object)


// this in function
function nodeObj() {
    //console.log(this);  // there is a object you can access or use
    
    let username = "dnano"
    console.log(username.this);  // undefined  ( this not works in function )
}
nodeObj();


// Arrow function declairation
const ArrowFn = () => {
    let username = "nanu"
    console.log(this.username)  // undefined 
}
ArrowFn()


// Explicit return
const addTwo = (num1, num2) => {  // iss syntax me curly brace use hai isliye ise return karna hota hain.
    return num1 + num2
}
console.log(addTwo(5, 7))  //12


// Implicit return
const addThreeNums = (num1, num2, num3) => num1 + num2 + num3
const addThree = (num1, num2, num3) => (num1 + num2 + num3)  // agar paranthesis use karoge to return karne ki jarurat nahi hai wo automatically return kar dega (yaha parentheses hi lagane chahiye na ki curly braces)
console.log(addThree(5, 10, 15))  //30


// How we can return object
const addFour = (num1, num2) => ({username: "Nano"})  // Without parentheses, JS will think {} is a code block, not an object.
console.log(addFour())  // output: { username: 'Nano' }