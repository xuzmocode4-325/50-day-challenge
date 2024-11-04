const nav = document.getElementById('nav')
const navDiv = document.getElementById('nav-div')

const fixNav = function () {
    console.log(nav.offsetHeight)
    if (window.scrollY > nav.offsetHeight + 250) {
        nav.classList.remove('bg-gray-800')
        nav.classList.add('bg-gray-100')
        nav.classList.remove('text-gray-100')
        nav.classList.add('text-gray-800')

        navDiv.classList.remove('py-4')
        navDiv.classList.add('py-1')

    } else {
        nav.classList.remove('bg-gray-100')
        nav.classList.add('bg-gray-800')
        nav.classList.remove('text-gray-800')
        nav.classList.add('text-gray-100')
        navDiv.classList.remove('py-1')
        navDiv.classList.add('py-4')
    }
}

window.addEventListener('scroll', fixNav)