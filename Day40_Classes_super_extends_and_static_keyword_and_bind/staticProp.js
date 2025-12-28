class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // static keyword access rok deta hain 
    static createId() {
        const randomNo = Math.floor(1000 + Math.random() * 1000);
        return `${randomNo}`
    }
}

const dnano = new User("dnano");
// console.log(dnano.createId());  // No access because of static keyword

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email
    }
}

const iphone = new Teacher("iPhone", "iphone@ios.in");
iphone.logMe()
console.log(iphone.createId());


/*
// Base class: User
class User {

    // constructor automatically runs when `new User()` is called
    constructor(username) {
        // `this` refers to the newly created object
        this.username = username
    }

    // Instance method
    // This method will be available to all objects created from User
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // static method
    // static methods belong to the CLASS, not to the object (instance)
    // Isliye ye `User.createId()` se call hoga
    // `dnano.createId()` ❌ allowed nahi
    static createId() {
        // random 4-digit number generate karta hai
        const randomNo = Math.floor(1000 + Math.random() * 1000);
        return `${randomNo}`
    }
}

// Object (instance) of User class
const dnano = new User("dnano");

// ❌ Error aayega kyunki createId static hai
// console.log(dnano.createId());


// Teacher class User se inherit kar rahi hai
class Teacher extends User {

    // Teacher ka constructor
    constructor(username, email) {

        // super() parent (User) ke constructor ko call karta hai
        // bina super() ke `this` use nahi kar sakte
        super(username);

        // Teacher specific property
        this.email = email
    }
}

// Teacher class ka object
const iphone = new Teacher("iPhone", "iphone@ios.in");

// logMe() User class se inherit hua hai
iphone.logMe()

// ❌ Error
// createId static method hai, instance ke paas nahi hota
console.log(iphone.createId());

// ✅ Correct way:
console.log(User.createId());
console.log(Teacher.createId());
*/