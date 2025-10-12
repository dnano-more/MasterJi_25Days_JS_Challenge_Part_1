// Variable declairation

// note: variable name should be readable fromat.
const accoutId = 144556;
let accoutEmail = "dnano@gmail.com";
var accountPassword = "345787";
accountCity = "Latur";
let accountState;

console.table([accoutId, accoutEmail, accountPassword, accountCity, accountState]);

// Investigative study
// accoutId = 11111;  // not allowed
console.log(accoutId);  // TypeError: Assignment to constant variable.

accoutEmail = "dnano@google.com";
accountPassword = "12345";
accountCity = "Pune";
accountState = "Maharashtra"

console.log(accoutEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);
// All values will update except const
console.table([accoutEmail, accountPassword, accountCity, accountState]);  // data ko tabular form me show karta hain.

/* 
note: Prefer to not use var in your code
    reason: Issue in block scope and functional scope
*/