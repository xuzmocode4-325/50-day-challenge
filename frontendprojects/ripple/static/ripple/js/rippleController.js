const button = document.querySelector('#btn')

//console.log(buttons)

button.addEventListener('click', function(e) {
    const x = e.clientX
    const y = e.clientY

    //console.log(x, y)

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    //console.log(buttonTop, buttonLeft)

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    console.log(xInside, yInside)

    const circle = document.createElement('span')
    circle.classList.add(
        'animate-fade', 'absolute', 'w-24', 'h-24', 'bg-[#fffff0]', 'rounded-full', '-translate-x-1/2', '-translate-y-1/2'
    )

    // console.log(circle)

    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 980)
})

//<span id="ripple" class="animate-fade absolute w-24 h-24 bg-[#fffff0] rounded-full -translate-x-1/2 -translate-y-1/2" style="top:10px; left:10px;"></span>