// Functions with Objects and Arrays

function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(39000));  // O/p : 39000  

// Situation: Agar mujhe pata na ho ki kitne item aane wale hain cart mein. I mean kitne arguments aane wale hain function mein. Mujhe bas unki total chahiye.
// Solution: Rest operator (...) ka use karte hain
function ItemsInCart(...items) {
    return items
}

console.log(ItemsInCart('iPhone', 'MackBook', 'Mike', 'T-shirt'));

// Samll interview question. What will be the output of following example.
function calculateCartPrice3(value1, value2, ...num1) {
    return num1
}

console.log(calculateCartPrice3(3999, 299, 1999, 449, 9999, 49));   
// solution : value1, value2 ko return nahi kiya hai to ye dono ki argumetns print nahi hongi aur bache huye saari values rest operator ki madad se num1 parameter me save hokar console pe print ho jayengi. O/p : [ 1999, 449, 9999, 49 ]


// passing object as argument
const bio = {
    name: 'dnano',
    age: 23
}

function bioData(anyObj) {
    console.log(`Name is ${anyObj.name} and Age is ${anyObj.age}`);
}

bioData(bio);  // Name is dnano and Age is 23
bioData({ name: 'Sachin', age: 28 });  // Name is Sachin and Age is 28


// passing array as argument
const arr = [200, 300, 400, 500];

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(arr)) //300

// Direct array as argument
console.log(returnSecondValue([200, 300, 400, 500])) //300