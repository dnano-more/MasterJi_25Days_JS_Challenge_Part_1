// Dates in detail

let tarikh = new Date()
console.log(typeof tarikh);    // object

// Different ways to create Date objects
console.log(tarikh);    // 2025-10-21T03:13:48.696Z
console.log(tarikh.toString());  // Tue Oct 21 2025 08:43:48 GMT+0530 (India Standard Time)
console.log(tarikh.toDateString());  // Tue Oct 21 2025
console.log(tarikh.toLocaleDateString());  // 10/21/2025
console.log(tarikh.toLocaleString());  // 10/21/2025, 8:43:48 AM


// Specific date creation
let myCreatedDate = new Date(2025, 0, 22);  // its YYYY/MM/DD fromat
console.log(myCreatedDate.toDateString());  // Wed Jan 22 2025  
// jab ham single digit me pass karte hain Date ko to wo ek Date object hone ke karan month '0' se start hoga [0 ==> Jan, 1 ==> Feb,... 11 ==> Dec]


// we can give time also while creating date
myCreatedDate = new Date(2025, 0, 22, 8, 10, 25, 45, 55);  // YYYY/MM/DD HH:MM:SS:MS
console.log(myCreatedDate.toString());  // Wed Jan 22 2025 08:10:25 GMT+0530 (India Standard Time)


// we can give in specific format also                     
myCreatedDate = new Date("2024-01-15")  // YYYY/MM/DD
myCreatedDate = new Date("01-14-2023")  // MM/DD/YYYY
console.log(myCreatedDate.toDateString());  // Sat Jan 14 2023

myCreatedDate = new Date("20-10-2025")  
console.log(myCreatedDate.toDateString());  // Invalid Date
// agar ham date ek fromat me pass karte hain to month '1' se start hoga [1 ==> Jan, 2 ==> Feb,... 12 ==> Dec]


// Timestamps in dates
// Use case of timestamps: Jab hame kisi specific date ko calculate karna hota hai to hum timestamp ka use karte hain. Jaise ki agar hame 2 date ke beech me difference nikalna ho to hum dono date ko timestamp me convert karenge fir unka difference nikalenge. Aur quizes design karna ho ya pols banane me matlab kisne kitne time me answer kiya etc me timestamp ka use hota hai. 
let myTimeStamp = Date.now();
console.log(myTimeStamp);   // 1758383346027 (milisecond value from January 1, 1970)
let myDateFromTimeStamp = new Date(myTimeStamp);
console.log(myDateFromTimeStamp.getTime());  // 1761019531655

// convert to seconds
console.log(Date.now());  // 1761019661106
console.log(Math.floor(Date.now()/1000));  // 1761019661


// Some more methods of Date Object
let newDate = new Date();
console.log(newDate);    // 2025-10-21T04:09:31.316Z
console.log(newDate.getDate());  // 21
console.log(newDate.getDay());  // 2  (0=Sunday, 6=Saturday)
console.log(newDate.getMonth());  // 9  (month 0 se start ho raha hain.)
console.log(newDate.getMonth() + 1);  // 10
console.log(newDate.getHours());  // 9
console.log(newDate.getMinutes());  // 39
console.log(newDate.getTime());   // 1761019771316  
console.log(newDate.getSeconds());  // 31
console.log(newDate.getFullYear());  // 2025
console.log(newDate.getMilliseconds());  // 316
console.log(newDate.getTimezoneOffset());  // -330


// string interpolation 
console.log(`Today is day ${newDate.getDay()} of the week(0=Sunday, ..., 6=Saturday) and date is ${newDate.getDate()}`);

// we can customize date format
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Calcutta"
});
console.log(newDate);  // 2025-09-20T16:50:56.167Z
