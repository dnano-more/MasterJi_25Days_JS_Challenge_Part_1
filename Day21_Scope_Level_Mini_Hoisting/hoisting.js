
function one() {
    const username = "dnano"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);  // it gives - ReferenceError: website is not defined 

    two()
}

one()
// note: Nested function me child function ko uske parent functions ke variables ka access hota hain. 


if (true) {
    const username = "dnano"
    
    if (username === "dnano") {
        const website = " more"
        console.log(username + website)  
        // output: dnano more (same concept here also: child ko parent ke varibales ka access hai.)
    }

    //console.log(website);  // ReferenceError milega. 
}
//console.log(username); // again ReferenceError

// note : block scope me child block ko parent block ke variables ka access hota hain. but child block ho ya koi bhi block ke variables ko bahar agar access karene ka try karoge to ReferenceError milega. matab {} bahar access nahi kiya ja sakta.


// ++++++++++++++++++++++++++++++++++++++++++++++++ Intresting concept +++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));  //output: 6

function addone(num) {
    return num + 1
}


console.log(addTwo(5));  //output: ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2
}

// note: function declairation me variable before initialization access kiya ja sakte hain but function expression aisa nahi hota.