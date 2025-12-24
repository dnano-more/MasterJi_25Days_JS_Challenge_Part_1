// Magic of Prtotype
function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2; // ham function ko object ki tarah treat kar sakte hain; function ki functionality to kaam karegi hi. Aisa isliye possible hain kiv ki har koi[string, number, array, etc] JS mein at the end object hi hain.

console.log(multiplyBy5(10));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);  // empty object show hoga but refference hota hain us function ka agar this keyword ho to.

function createUser(username, score){
    this.username = username;
    this.score = score
}

// Khud ke properties/methods
createUser.prototype.increment = function(){
    score++
}

createUser.prototype.printMe = function(){
    console.log(`Age is ${this.score}`)
}

const Harshad = new createUser('Beginner', 22);
const Sachin = new createUser('Pro', 30);

Harshad.printMe();
Sachin.printMe();


// What new does (quick recap):

//1️⃣ Creates empty object {}
//2️⃣ Sets this → that object
//3️⃣ Links object to createUser.prototype
//4️⃣ Returns the object