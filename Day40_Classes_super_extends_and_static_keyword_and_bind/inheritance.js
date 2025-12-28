class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);  // 👉 super() parent class ke constructor ko call karta hai aur this ko activate karta hai.
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const t1 = new Teacher("Sachin", "sachin@microsot.com", "123");
t1.addCourse();
t1.logMe();

const buyer = new User("dnano");
//buyer.addCourse();  // access nahi hain❌

buyer.logMe();

console.log(t1 === buyer);  // false
console.log(t1 === Teacher);  // false

console.log(t1 instanceof Teacher)  // true
console.log(buyer instanceof User)  // true
console.log(Teacher instanceof User)  // flase