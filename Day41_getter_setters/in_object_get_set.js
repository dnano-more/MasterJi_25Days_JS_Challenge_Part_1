const User = {
    _email: 'hs@cloud.com',
    _password: 'abc',

    get email(){
       return this._email.toUpperCase() 
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

console.log(`This is email: ${User.email}`)
console.log(`Thi is password: ${User.password}`)

const harshad_jr = Object.create(User);
console.log(harshad_jr.email);