const smallCups = document.querySelectorAll('.small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

const updateBigCup = () => {
    const fullCups = document.querySelectorAll('.small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
        liters.innerText = `${2000 - (250 * fullCups)}ml`
    } else {
        percentage.style.visibility = 'visible'
        remained.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 280}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
        liters.innerText = `${2000 - (250 * fullCups)}ml`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
}

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

const highlightCups = (idx) => {
    //console.log(smallCups.length)
    let lastCup = idx +1  === smallCups.length
    //console.log(lastCup)
    let currentContains = smallCups[idx].classList.contains('full')

    if (!lastCup) {
        let nextContains = !smallCups[idx].nextElementSibling.classList.contains('full')
        if (currentContains && nextContains) {
            idx--
        } 
    } else {
        if (currentContains) {
            idx--
        }
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx)  {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
} 



