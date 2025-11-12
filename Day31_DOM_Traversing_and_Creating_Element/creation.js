// Creating elements

const div = document.createElement('div');
console.log(div);  

div.className = "main"
// div.id = "myID"
div.id = Math.round(Math.random() * 10 + 1)

// creation of custom attributes
div.setAttribute("naam", "generated naam")  // its like key and value of object

// styling
div.style.backgroundColor = "darkgreen"
div.style.color = "yellow"
div.style.padding = "10px"
div.style.margin = "10px"
div.style.borderRadius = "20px"
div.style.border = "2px dashed yellow"
div.style.textAlign = "center"

// Adding text 
// div.innerText = "This is generated element using JS"
const addText = document.createTextNode('This element is created  by JS');
div.appendChild(addText); 

// Appending to body of html
document.body.appendChild(div);

