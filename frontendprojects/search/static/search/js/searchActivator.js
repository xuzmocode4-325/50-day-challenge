const search = document.getElementById('search')

search.addEventListener('click', () => {
    search.classList.contains('activated') ?
    search.classList.remove('activated') :
    search.classList.add('activated')
})