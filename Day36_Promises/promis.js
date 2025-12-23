// Creating a Promise
const onePromise = new Promise(function (resolve, reject) {
    // What is instance in Javascript? read ==> https://share.google/aimode/1nXiNKmvphitfdWWT
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        // console.log("Async task is completed.");
        resolve();
    }, 1000);
});

// Handling Promise
onePromise.then(function () {
    // console.log("Promise consumed!");
})


// Chained Promises 
new Promise(function (hoGaya, nahiHuva) {
    setTimeout(function () {
        // console.log("Async task two");
        hoGaya();
    }, 1000);
}).then(function () {
    // console.log("Async two resolved!");
});


// Promises with data
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "nano", email: "nano@netflix.com" });
    }, 1000)
})

promiseThree.then(function (user) {
    // console.log(user);
})


// Promises with error handling
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "dnano", email: "nano@amazon.com" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// })
// console.log(username);

// promises se Data nikalne ke liye uski chaining karni hoti hain
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((myUsername) => {
        console.log(myUsername);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolve or rejected."))


// Promises with async await
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Sachin", email: "sachin@microsoft.com" });
        } else {
            reject('ERROR: microsoft went wrong');
        }
    }, 1000)
})

// Situation like -  DB connection hua hi nahi to aage nahi jana ho to .then() ki bajay async, await laga sakto ho for example⬇
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// get all users
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json();
        // console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((respons) => {
    return respons.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log('error'));


// My github api
fetch('https://api.github.com/users/dnano-more')
.then((respons) => {
    return respons.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log('error'));