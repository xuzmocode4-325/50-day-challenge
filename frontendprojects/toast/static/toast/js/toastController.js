const button  = document.getElementById('button')
const success  = document.getElementById('button-success')
const caution  = document.getElementById('button-caution')
const error  = document.getElementById('button-error')


const toasts = document.getElementById('toasts')

const messages = [
    "#50DayChallenge",
    "#UIUX",
    "#FrontendWebDevelopment",
    "#HTML",
    "#TailwindCSS",
    "#JavaScript",
    "#Django",
    "#ToastNotificationApp",
    "#StayInformed",
    "Toast!"
]

const colors = {
    'error': 'text-red-700',
    'success': 'text-green-700',
    'caution': 'text-orange-700'
}

button.addEventListener('click', () => createNotification(null, null))
// success.addEventListener('click', () => createNotification('Success!', 'success'))
// error.addEventListener('click', () => createNotification('There Has Been An Error', 'error'))
// caution.addEventListener('click', () => createNotification('This Is A Caution', 'caution'))

const createNotification = function (message, type) {
    const notif = document.createElement('div')
    //console.log(type)
    const color = type ? colors[type] : 'text-indigo-700'

    console.log(color)

    notif.classList.add('bg-yellow-100', 'py-3', 'px-6', 'rounded-md', 'm-2', `${color}`)

    notif.innerText = message ? message: getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3500)
}

const getRandomMessage = function() {
    return messages[
        Math.floor(
            Math.random() * messages.length
        )
    ]
}