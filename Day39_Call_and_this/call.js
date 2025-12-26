function setUserName(username) {
    //Complex DB calls
    this.username = username; //setUserName call hone ke baad execution context gayab hoga, to niche se .call() through aaya hua createUser ka context le lega. 
    console.log("called");

    /*
    This function depends on this
    It does not create its own object
    Whoever calls it decides what this is
    */
}

function createUser(username, email, password) {
    setUserName.call(this, username); // we are passing context to setUserName fn

    this.email = email;
    this.password = password;

    /*
    Here’s the magic 👇
    new createUser(...) creates a brand-new empty object    That object becomes this inside createUser  You manually pass that same this into setUserName using .call()   So both functions modify the same object
    */
}

const newUser = new createUser("art3Miss", "art@fb.com", "123");
console.log(newUser);