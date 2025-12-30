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