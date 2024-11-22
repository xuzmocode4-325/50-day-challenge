const fill = document.querySelector('.fill')
const boxes = document.querySelectorAll('.box')


const dragStart = function(){
    console.log(this)
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

const dragEnd = function(){
    console.log(this)
    this.className = 'fill'
}

const dragOver = function(e){
    e.preventDefault()
    //console.log('drag over')
}

const dragEnter = function(e){
    e.preventDefault()

    this.className += 'hovered'
}

const dragLeave = function(){
    console.log('drag leave')

     this.className += ''
}

const dragDrop = function(){

    this.className = ''
    this.append(fill)
    //console.log('drag drop')
}

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

boxes.forEach((box) => {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter) // Corrected function name
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
})