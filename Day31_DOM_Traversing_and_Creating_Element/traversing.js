const weekday = document.querySelector('.weekday');
console.log(weekday);

//finding child element 
console.log(weekday.children);  // child elements ka HTMLCollection dega

// .children ye array like property hoti hain.
console.log(weekday.children[2]);
console.log(weekday.children[2].innerHTML);


// finding all chilidren innerText
for (let index = 0; index < weekday.children.length; index++) {
    console.log(weekday.children[index].innerHTML);
}

// styling to children
weekday.children[1].style.color = 'orange'

// finding firstChild/lastChild elements
console.log(weekday.firstElementChild);
console.log(weekday.lastElementChild);


// child to parent traversing
const dayOne = document.querySelector('.day');
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

// nodelist discussion
console.log("Nodes: ", weekday.childNodes);
/* note:
* childNodes me text nodes bhi aate hain, jo ki line breaks hote hain HTML me.
* comment nodes bhi aate hain agar koi comment likha ho HTML me.
* extra line breaks aur spaces bhi text nodes ke roop me count hote hain.
* ek line se jyaada spaces hone par bhi ek hi text node banta hain.
*/ 