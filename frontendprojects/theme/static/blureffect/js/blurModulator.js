const body = document.querySelector('body')
const bg = document.getElementById('bg');
const loadingText = document.getElementById('loading-text');

let load = 0;
let intVal;

// Initialize the image with full blur
bg.style.filter = 'blur(32px)';

const map = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

body.addEventListener('click', () => {
    // Start the blurring process on click
    console.log('clicked')
    if (!intVal) {
        intVal = setInterval(blurring, 60);
    }
});

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(intVal);
    }
    
    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = map(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${map(load, 0, 100, 32, 0)}px)`;
}
