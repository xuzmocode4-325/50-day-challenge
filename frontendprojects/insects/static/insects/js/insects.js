const screens = document.querySelectorAll('.screen')
const startBtn = document.getElementById('start')
const bugSelectors = document.querySelectorAll('.bug-selector-btn')
const gameSpace = document.getElementById('game-screen')
const timer = document.getElementById('time')
const scoreKeeper = document.getElementById('score')
const message = document.getElementById('message')

// console.log(screens)
// console.log(startBtn)
// console.log(bugSelectors)
// console.log(gameSpace)
// console.log(time)
// console.log(scoreKeeper)
// console.log(message)

let seconds = 0
let score = 0
let selectedInsect = {}

screens.forEach(screen => screen.classList.remove('up'))

startBtn.addEventListener('click', () => screens[0].classList.add('up'))

bugSelectors.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selectedInsect = { src, alt}
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timer.innerHTML = `Time ${m}:${s}`
    seconds ++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x, y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" 
        style="transform: rotate(${Math.random() * 360}deg)"/>`

    insect.addEventListener('click', catchInsect)
    
    gameSpace.appendChild(insect)
}

function getRandomLocation () {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return {x, y}
}

function catchInsect() {
    increaseScore() 
    this.classList.add('caught')
    setTimeout(() => {
        this.remove()
    }, 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score ++ 
    if (score > 24) {
        message.classList.remove('hidden')
    }
    scoreKeeper.innerHTML = `Score: ${score}`
}