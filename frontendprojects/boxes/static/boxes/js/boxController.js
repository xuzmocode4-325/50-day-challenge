const boxes = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    boxes.classList.toggle('big')
})



function createBoxes() {
    const dimensions = boxes.getBoundingClientRect()
    console.log(dimensions)
    const boxSize = dimensions.width > 320 ? 128: 80 

    for (let i = 0; i < 4; i++) { 
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box', 'bg-yellow-400', 'w-20', 'h-20', 
                'sm:w-32', 'sm:h-32', 'bg-cover', 'bg-no-repeat') 
            box.style.backgroundPosition = `${- j * boxSize}px ${-i * boxSize}px`
            console.log(box)
            boxes.appendChild(box)
        }
       
    }
}

createBoxes()

//        <div  class="box bg-yellow-400 w-20 h-20 sm:w-32 sm:h-32 bg-cover bg-no-repeat"></div>