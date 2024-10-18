const toggle = document.getElementById('toggle');
const links = document.querySelectorAll('#link-list');
const lines = document.querySelectorAll('#line')
const nav = document.getElementById('nav'); 

toggle.addEventListener('click', () => {
    console.log('clicked')
    nav.classList.toggle('activated')
    if (nav.classList.contains('activated')) {
        nav.classList.remove('w-20')
        nav.classList.add('w-96')
    } else {
        nav.classList.remove('w-96')
        nav.classList.add('w-20')
    }
})

