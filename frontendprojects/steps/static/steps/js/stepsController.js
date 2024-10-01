const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('#circle')

let currentActive = 1 
console.log(circles.length)


next.addEventListener('click', ()=> {
    currentActive ++
    

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    console.log('clicked next', currentActive)
    update()
})

prev.addEventListener('click', ()=> {
    currentActive--
    
    if (currentActive < 1) {
        currentActive = 1
    } 
    console.log('clicked prev', currentActive)
    update()
})

update = () => {
    console.log('updating')
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('activated')
            circle.classList.remove("border-slate-800")
            circle.classList.add("border-green-600")
        } else {
            circle.classList.remove('activated')
            circle.classList.remove("border-green-600")
            circle.classList.add("border-slate-800")
        }
    }) 

    const activatedCircles = document.querySelectorAll('.activated') 

    progress.style.width = (((activatedCircles.length -1) / (circles.length -1))) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else  if (currentActive == circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}