const colorEl = document.getElementById('color-btn');
const clearEl = document.getElementById('clear-btn');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');

let penColor;
let size = 5;

let x
let y

function setup() {
    const canvasParent = document.getElementById('art-div');   

    const { width, height } = canvasParent.getBoundingClientRect();
    const sketchCanvas = createCanvas(width, height);
    sketchCanvas.parent(canvasParent);
  
    window.addEventListener('resize', resizeCanvasToParent);
    rectMode(CENTER);

    background(255);    

}
  
function draw() {


    penColor = colorEl.value
    strokeWeight(size)


    if (mouseIsPressed == true) {
        console.log(penColor)
        console.log(size)

        stroke(penColor)
        line(mouseX, mouseY, pmouseX, pmouseY);
        //circle(mouseX, mouseY, size)
    }
    
}

const resizeCanvasToParent = () => {
    const canvasParent = document.getElementById('art-div');
    const { width, height } = canvasParent.getBoundingClientRect();
    resizeCanvas(width, height);
}

const updateSizeOnScreen = () => {
    sizeEl.innerText = size
}


increaseBtn.addEventListener('click', () => {
    size += 5;

    if (size  > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if (size  < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

clearEl.addEventListener('click', () => {
    clear();
    background(255); 
})






