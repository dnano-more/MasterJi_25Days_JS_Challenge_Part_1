// ES6

class User {
    // The constructor method initializes object properties

    constructor(username, email, password) {
        //this → refers to the newly created object  
        //Left side(this.username) → property on the object
        //Right side(username) → constructor parameter
        this.username = username;
        this.email = email;
        this.password = password
    }

    // Class methods
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

// Creating new objects (instances) from the class
const botUser = new User("chai", "chai@gmail.com", "123");

// Access properties and methods
console.log(botUser.encryptPassword());
console.log(botUser.changeUsername());


// Behind the scene
function UserTwo(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const oldUser = new User("OldNemo", "nemo@gmail.com", "987");

// Access properties and methods
console.log(oldUser.encryptPassword());
console.log(oldUser.changeUsername());
