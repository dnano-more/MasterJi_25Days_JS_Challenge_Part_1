// Functions - its like package of code, you can reuse it multipe times

// console.log("D");
// console.log("N");
// console.log("A");
// console.log("N");
// console.log("O");

// function declairation
function sayMyName() {
    console.log("D");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("O");
}

// refering and calling function
sayMyName   // its refference of function
sayMyName()  // This is calling(means function ko exicute karo)

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(3, 5)  // 8 

//experiments
addTwoNumbers(3, '15')  // '315' (reson - type coercion) 
addTwoNumbers(3, 'a')  // '3a' 
addTwoNumbers(3, null)  // 3
addTwoNumbers()  // NAN 
// Reason - num1 = undefined, num2 = undefined; undefined + undefined = NAN

const result = addTwoNumbers(8, 5)
console.log(`result of num1 + num2 is ${result}`, typeof result);

function addTwoNumbers(num1, num2) {
    return num1 + num2
}

// Remember - return keyword values ko return karta hain uske outer scope ko and console.log se values ko conole pe print kiya jata hain
function loginUserMessage(username) {
    return `${username} just logged in!`
}

loginUserMessage('dnano');  // function exicuted and value bhi return ho chuki hain 
console.log(loginUserMessage('dnano'));  // yaha bas us value ko ham print kar rahe hain

console.log(loginUserMessage()) // it gives output: undefined just logged in!

// defualt parameters in function
function LoginUser(username = "Guest") {
    return `${username} just logged in!`
}   
console.log(LoginUser())  // output: Guest just logged in!


// After return keyword nothing is exicute in function
function user(username) {
    if (username === undefined) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in!`;
}

user()  // output: Please enter username
user('dnanu')  // empty console! confirmed after return keyword nothing exicute

