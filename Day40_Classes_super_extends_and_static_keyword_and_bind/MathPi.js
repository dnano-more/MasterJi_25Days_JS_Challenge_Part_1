// can we change the value of pi? And agar change nahi kar sakte to kinv?

//console.log(Math.PI);

Math.PI = 10
//console.log(Math.PI)  // No change.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(descriptor);

descriptor.writable = true
descriptor.enumerable = true
descriptor.configurable = true
//console.log(descriptor);

Math.PI = 10
//console.log(Math.PI)  // 😅 I realise i am noob here. Javascript ingine ko V8 engine ya node.js me alag se banane vale developers ne PI ki value ko hard coded aur saare checks lagakar bana diya hain taki koi use change na kar sake future me. 
// It is a implementation of core javascript in browsers V8 engine and node.js, so you do not overwrite, enumerate and configure PI value later. 
//Yes, It is possible to take flags and properties to change later. You can define these properties.

// fuctory fun 
//const myObject = Object.create(null);

// Object ki properties ko chnage karna sikho[writable, enumerable, configurable]
const objectBaba = {
    name: 'Daaku',
    price: 999,
    hainKya: true,

    orderChai: function(){
        console.log("Chai nahi bani")
    }
}
//console.log(objectBaba);
console.log(Object.getOwnPropertyDescriptor(objectBaba, "name"));

Object.defineProperty(objectBaba, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(objectBaba, "name"));


for (let [key, value] of Object.entries(objectBaba)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}



// Better commenting code for better readability and understanding
// --------------------------------------------------
// ❓ Can we change the value of PI?
// Agar change nahi kar sakte, to kyun?

// console.log(Math.PI);   // 3.141592653589793

// Try to overwrite PI
Math.PI = 10;

// console.log(Math.PI);  
// ❌ Still same value
// Reason: Math.PI is READ-ONLY (not writable)


// 🔍 Let’s inspect the property descriptor of Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// ❗ Even if we try to change descriptor flags manually,
// it won’t work because this object is controlled by the JS engine
descriptor.writable = true;
descriptor.enumerable = true;
descriptor.configurable = true;

// console.log(descriptor); // This only changes our local copy, NOT the real one

Math.PI = 10;

// console.log(Math.PI);
// ❌ No change again 😅


// 🧠 IMPORTANT REALIZATION:
// Math.PI is implemented by the JavaScript engine itself
// (V8 in Chrome / Node.js, SpiderMonkey in Firefox, etc.)
//
// Engine developers intentionally made it:
// - writable: false
// - enumerable: false
// - configurable: false
//
// So that:
// ✔ Mathematical correctness is preserved
// ✔ No one can accidentally or intentionally break core behavior
//
// This is NOT something we can override at runtime.


// --------------------------------------------------
// 🏭 Factory-style object creation without prototype
const myObject = Object.create(null);
// (No inherited properties, pure object)


// --------------------------------------------------
// 📦 Normal JavaScript object
// Learning how property flags work:
// writable, enumerable, configurable

const objectBaba = {
    name: 'Daaku',
    price: 999,
    hainKya: true,

    orderChai: function () {
        console.log("Chai nahi bani");
    }
};

// console.log(objectBaba);

// 🔍 Check property descriptor of "name"
console.log(Object.getOwnPropertyDescriptor(objectBaba, "name"));
/*
By default:
{
  value: 'Daaku',
  writable: true,
  enumerable: true,
  configurable: true
}
*/


// 🔒 Modify property behavior using defineProperty
Object.defineProperty(objectBaba, "name", {
    writable: false,     // value cannot be changed
    enumerable: false    // property won’t show in loops
    // configurable remains true (not specified)
});

console.log(Object.getOwnPropertyDescriptor(objectBaba, "name"));


// --------------------------------------------------
// 🔁 Loop through object properties
// Only enumerable properties are iterated
for (let [key, value] of Object.entries(objectBaba)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

// "name" will NOT appear because enumerable = false
