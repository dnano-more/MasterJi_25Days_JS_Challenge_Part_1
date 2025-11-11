// id selector

document.getElementById('title')  // selects the element of that id


// DOM element ke direct properties
console.log(document.getElementById('title').id) // returns the value of id

// CSS ke class ko Javascript me className kaha jata hain under se
console.log(document.getElementById('title').class)  // undefined

console.log(document.getElementById('title').className); // We use '.className' for acessing the value of class not '.class'
console.log(document.getElementById('title').classList); // returns the list of classes as a DOMTokenList

// We can replace html attributes with new one [live property bindings]
const title = document.getElementById('title');
console.log(title.id);         // "title"

title.id = "newId"
console.log(title.id);         // "newId"

const className = document.getElementById('title')
console.log(title.className);

title.className = "main-heading"
console.log(title.className);

title.className = "main-heading main-line"
console.log(title.className);

// Agar element ke attributes ko select karna ho to ⬇
console.log(document.getElementById('newId').getAttribute('id'));
console.log(document.getElementById('newId').getAttribute('class'));

// Setting attributes (It actually overwrite the original atribute value)
document.getElementById('para-id').setAttribute('class', 'first-para');
document.getElementById('para-id').setAttribute('class', 'first-para para-color');

const h1 = document.getElementById('newId');
h1.style.backgroundColor = 'darkgreen'
h1.style.fontStyle = 'italic'
h1.style.padding = '16px'
h1.style.paddingLeft = '30px'
h1.style.borderRadius = '10px'

const title2 = document.getElementById("content");

// console.log(title);
console.log(title2.textContent);  // shows ALL text, including hidden ones
console.log(title2.innerText);    // shows only visible text
console.log(title2.innerHTML);    // returns HTML markup inside the element


const classes = document.getElementsByClassName('dusra-para');
console.log(classes); // returns HTMLCollection 

// 🔹 Modern & powerful selectors (querySelector)
console.log(document.querySelector('h1'));                // first <h1>
console.log(document.querySelector('h2'));                // first <h2>
console.log(document.querySelector('.dusra-para'));          // first element with class 'dusra-para'
console.log(document.querySelector('#content'));            // element with ID 'content'
console.log(document.querySelector('input[type="password"]'));  // input element of type password

console.log(document.querySelector('p:first-child'))