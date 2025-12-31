class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(vlaue){
        //we do not write any return keyword in setters
        this._email = vlaue
    }

    get password(){
        return `${this._password}harshad`
    }

    set password(value){
        this._password = value
    }
}

const harshad = new User("harshad@gmail.com", "abc")
console.log(harshad.email);
console.log(harshad.password);


/* ------------------------------------------------------------------
WHY GETTERS & SETTERS IN JAVASCRIPT?

Getters and setters allow us to control how object properties
are accessed (read) and modified (written).

WHY THEY ARE USEFUL:
1. Add logic when reading or writing a property (e.g., formatting data)
2. Protect internal data from direct access
3. Validate or modify values before storing them
4. Keep the same property name while changing internal behavior

IMPORTANT:
- Accessing a property calls the getter automatically
- Assigning a value calls the setter automatically
- Use a different internal variable (_property) to avoid infinite loops
*/

/*
class User {
    constructor(email, password){
        // These assignments trigger the setters below
        this.email = email;
        this.password = password;
    }

    // Getter runs when user.email is accessed
    get email(){
        // Returning email in uppercase
        return this._email.toUpperCase();
    }

    // Setter runs when user.email = value is assigned
    set email(value){
        // Setters do not return anything
        this._email = value;
    }

    // Getter runs when user.password is accessed
    get password(){
        // Example logic added while reading the value
        // (Not for real password handling)
        return `${this._password}harshad`;
    }

    // Setter runs when user.password = value is assigned
    set password(value){
        this._password = value;
    }
}

// Creating a new User instance
const harshad = new User("harshad@gmail.com", "abc");

// Getter is called here
console.log(harshad.email);

// Getter is called here
console.log(harshad.password);
---------------------------------------------------------- */


/*
WHY PRIVATE FIELDS (#)?

Private fields provide TRUE data privacy in JavaScript classes.
They cannot be accessed or modified outside the class.

We still use getters and setters to:
- Control how data is read or written
- Keep a clean property-style API (user.email)
- Add logic like formatting or validation
*/

/*
class User {
    // Private fields (not accessible outside this class)
    #email;
    #password;

    constructor(email, password) {
        // Assign values directly to private fields
        this.#email = email;
        this.#password = password;
    }

    // Getter for email
    // Called when user.email is accessed
    get email() {
        // Example logic while reading the value
        return this.#email.toUpperCase();
    }

    // Setter for email
    // Called when user.email = value is assigned
    set email(value) {
        // Place for validation if needed
        this.#email = value;
    }

    // Getter for password
    // (Only for learning — do NOT expose passwords in real apps)
    get password() {
        return `${this.#password}harshad`;
    }

    // Setter for password
    set password(value) {
        this.#password = value;
    }
}

// Creating a new User instance
const harshad = new User("harshad@gmail.com", "abc");

// Uses getter
console.log(harshad.email);     // HARSHAD@GMAIL.COM

// Uses getter
console.log(harshad.password);  // abcharshad

// ❌ Not allowed — true privacy
// console.log(harshad.#email); // Syntax Error
----------------------------------------------------------- */