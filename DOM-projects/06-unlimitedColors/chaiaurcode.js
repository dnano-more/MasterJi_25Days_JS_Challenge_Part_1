// document.querySelector('#start').addEventListener('click', function () {
//     const randomColor = function(){
//         const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "gray", "black", "white"];
//         const randomIndex = Math.floor(Math.random() * colors.length);
//         const randomColors = colors[randomIndex];
//         document.querySelector('body').style.backgroundColor = randomColors;
//     };

//     const setInt = setInterval(randomColor, 1000);

//     document.querySelector('#stop').addEventListener('click', function () {
//         clearInterval(setInt);
//         console.log("STOPED");
//     })
// })

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId; 
function startChangingColor() {
    // intervalId = setInterval(changeBgColor, 1000);

    if (intervalId == null) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;  // memory cleaning
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
