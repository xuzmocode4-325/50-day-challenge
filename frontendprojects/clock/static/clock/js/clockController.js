const toggle = document.getElementById('toggle')
const hour = document.getElementById('hour-hand')
const minute = document.getElementById('minute-hand')
const second = document.getElementById('second-hand')
const time = document.getElementById('time')
const date = document.getElementById('date')
const bg = document.getElementById('bg')

const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"
    ];
const months = [
        "January", "February", "March", "April", "May", 
        "June", "July", "August", "September", "October", 
        "November", "December"
    ];

toggle.addEventListener('click', (e) => {
    const bg = document.getElementById('bg')

    if (bg.classList.contains('darken')) {
        bg.classList.remove('darken')
        bg.classList.remove('text-gray-900')
        bg.classList.add('text-gray-200')
        bg.classList.remove('bg-gray-200')
        bg.classList.add('bg-gray-900')
        toggle.classList.remove('bg-gray-900')
        toggle.classList.add('bg-gray-200')
        toggle.classList.remove('text-gray-200')
        toggle.classList.add('text-gray-900')
        e.target.innerHTML = 'Light Mode'
    } else {
        bg.classList.add('darken')
        bg.classList.remove('text-gray-200')
        bg.classList.add('text-gray-900')
        bg.classList.remove('bg-gray-900')
        bg.classList.add('bg-gray-200')
        toggle.classList.remove('bg-gray-200')
        toggle.classList.add('bg-gray-900')
        toggle.classList.remove('text-gray-900')
        toggle.classList.add('text-gray-200')
        e.target.innerHTML = 'Dark Mode'
    }
})

const setTime = () => {
    const currentTime = new Date();
    const month = currentTime.getMonth();
    const day = currentTime.getDay();
    const currentDate = currentTime.getDate()
    const hours = currentTime.getHours();
    const year = currentTime.getFullYear()
    const clockHours = hours % 12
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM'

    const hourHand = scale(clockHours, 0, 11, 0, 360)
    hour.style.transform = `translate(-50%, -100%) rotate(${hourHand}deg)`

    const minuteHand = scale(minutes, 0, 59, 0, 360)
    minute.style.transform = `translate(-50%, -100%) rotate(${minuteHand}deg)`

    const secondHand = scale(seconds, 0, 59, 0, 360)
    second.style.transform = `translate(-50%, -100%) rotate(${secondHand}deg)`

    const dateHTML = `<span id="circle" class="bg-green-700 text-gray-200 p-2 rounded-full">${currentDate}</span> `
    time.innerHTML = `${clockHours}:${minutes < 10 ? `0${minutes}`:`${minutes}`} ${ampm}`
    date.innerHTML = `${days[day]} ${dateHTML} ${months[month]} ${year}` //
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)





