const container = document.getElementById('container')
const picusmURL =  `https://picsum.photos/id/`
const rows = 10 

for( let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${picusmURL}${getRandomNr()}/200/200`
    container.appendChild(img)
}

function getRandomNr() {
    return Math.floor(Math.random() * 100) +  Math.floor(Math.random() * 10)
}

console.log(picusmURL)