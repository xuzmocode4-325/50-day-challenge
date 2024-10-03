const search = document.getElementById('search')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    search.classList.contains('activated') ?
    search.classList.remove('activated') :
    search.classList.add('activated')
})