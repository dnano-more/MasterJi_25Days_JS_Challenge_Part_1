// Scope

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// Scope means ===> {} braces; It measns the area where a variable is accessible.

// Global Scope and Local Scope

let a = 100
let b = 200
var c = 300

if (true) {
    console.log('local scope: iska access global me nahi hota. {} ke under hi rehta hain var ko chode kar.');
    console.log('These variables is in local scope:');
    
    let a = 10;
    const b = 20;
    // ye variables sirf yaha par hi accisible honge, {} bahar access nahi milega.
    var c = 30; //but var is accesible here and also outside of {}

    console.log(`Inner a:  ${a}`);
    console.log(`Inner b:  ${b}`);
    console.log(`Inner c:  ${c}`);
}
// console.log(a);  //ReferenceError: a is not defined
// console.log(b);  //ReferenceError: b is not defined
console.log(`Inner c:  ${c}`);    //30


// global scope
console.log('These variables is in global scope:');

console.log(`Outer a:  ${a}`);  // 100
console.log(`Outer b:  ${b}`);  // 200
console.log(`Outer c:  ${c}`);  // 30  isme recent vale var ki value pick ho gai hain


//note: scope is different in browser and node.js