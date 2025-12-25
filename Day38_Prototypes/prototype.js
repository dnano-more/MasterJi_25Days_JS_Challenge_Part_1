// Can we create our methods like trim()?

// I want to create my method .trueLength() Jo ki string ki exact length bata de with characters and sapces alag se bol ke.
let myName = 'dnyaneshwar    '
let mySirName = 'more  '

// myName.trueLength()
// mySirName.trueLength()

let myHeros = ['Iron-Man', 'Thor', 'Hulk'];

const powers = {
    thor: 'hammer',
    spiderman: 'sling',

    getSiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

// Object.create, Object.prototype, etc are factory functions
Object.prototype.dnano = function(){
    console.log("dnano is in every object of this page!");
}

Array.prototype.heyDnano = function(){
    console.log("heyDnano is new method!");
}

// powers.dnano();
// myHeros.dnano();

myHeros.heyDnano();
// powers.heyDnano(); // object pe nahi chalega; sirf arry pe hi chalega.


// Protypal Inheritance [Old approach]
const User = {
    name: 'Amar',
    email: 'amar@google.com'
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport // Now TASupport can borrow teachingSupport objects properties. TASupport → teachingSupport → Object → null
}

// for accessing User Object properties
Teacher.__proto__ = User;  // Teacher bolega: Agar mere paas nahi mila, User se puchh lo
console.log(`Teacher proto: ${Teacher.name}`);


// Modern Syntax
Object.setPrototypeOf(teachingSupport, Teacher);  // Now chain: teachingSupport → Teacher → User → Object


// Khud ki method.
let anotherUsername = "Manoj   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"dnano-more".trueLength();
"SWE I @Google".trueLength();

myName.trueLength()
mySirName.trueLength()