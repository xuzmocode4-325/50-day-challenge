const contents = document.querySelectorAll('.content')
const links = document.querySelectorAll('.links')

function hideAllContents () {
    contents.forEach(content => {
        content.classList.remove('opacity-100')
        content.classList.add('opacity-0')
    }) 
}

function hideAllItems () {
    links.forEach(link => {
        link.classList.remove('text-purple-700')
    }) 
}

links.forEach((link, idx) => {
    link.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        console.log('clicked', idx)
    })
})