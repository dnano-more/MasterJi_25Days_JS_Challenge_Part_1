// Object literal + this
const user = {
    username: "Dnano",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);  //prints current context
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function (factory for objects 🏭)
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this  // JavaScript returns this automatically.
}

// console.log(User());

// value overiding issue
// const userOne = User('Harshad', 10, true);
// const userTwo = User('Sachin', 20, true);
// console.log(userOne);

//seprate rahe objects to use karo new keyword
const userOne = new User('Harshad', 10, true);
const userTwo = new User('Sachin', 20, true);
console.log(userOne);
console.log(userTwo);



// Mental model (simple & accurate)

// Object literal → one object

// Constructor + new → many objects

// Method call (obj.method()) → this = obj

// Function call (func()) → this = global / undefined

// Final takeaway (exam + interviews)

//❌ Calling constructor without new = bug
//✅ new = fresh object every time
//🎯 this depends on how a function is called, not where it’s written
