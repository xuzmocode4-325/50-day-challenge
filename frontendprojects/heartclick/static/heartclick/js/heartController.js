const img = document.getElementById('img')
const times = document.getElementById('times')

let clickTime = 0
let timesClicked = 0

img.addEventListener('click',  (e) =>  {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
            timesClicked ++
        } else (
            clickTime = new Date().getTime()
        )
    }
})

const createHeart = (e) =>  {
    const heart = document.createElement('i')
    heart.classList.add(
        'fas', 'fa-heart', 'animate-fade', 'text-pink-700', 'text-3xl', 'absolute',
    '-translate-x-1/2', 'translate-y-1/2', 'origin-center', )

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.left = `${xInside}px`
    heart.style.top = `${yInside}px`
   

    console.log(xInside, yInside)

    img.appendChild(heart)

    times.innerHTML = timesClicked

    setTimeout(() => heart.remove(), 900)
}