const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.getElementById('container')
const circle = document.getElementById('circle')

open.addEventListener('click', () => {
    console.log('clicked open');
    container.classList.add('rotated');
});


close.addEventListener('click', () => {
    console.log('clicked close');
    container.classList.remove('rotated');
});