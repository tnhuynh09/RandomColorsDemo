function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

// const h1 = document.querySelector('h1');

// setInterval(function() {
//     h1.style.color = randomRGB();
// }, 500);

const letters = document.querySelectorAll('.letter');

//We don't have to set const intervalId. It can be removed. It's there as an option to clearInterval(intervalId) in the console if we want it to stop generating random colors. 
const intervalId = setInterval (function() {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 500);

