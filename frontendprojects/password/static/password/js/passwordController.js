const background = document.getElementById('background')
const password = document.getElementById('password')

//console.log(background)

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    const strength = 20 - length * 2
   // console.log(strength)

    background.style.filter =`blur(${strength})`
})