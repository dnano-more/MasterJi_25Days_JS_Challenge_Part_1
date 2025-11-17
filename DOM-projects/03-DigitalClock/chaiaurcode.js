const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerText = date.toLocaleTimeString();

    clock.style.fontSize = '70px'
    clock.style.fontFamily = 'Orbitron'
    clock.style.fontWeight = 500
    clock.style.background = 'radial-gradient(ellipse at center,  #0a2e38  0%, #000000 50%)'
    clock.style.textShadow = '0 0 20px rgba(0, 0, 0, 1),  0 0 20px rgba(10, 175, 230, 1)'
    clock.style.color = '#daf6ff'
}, 1000);
