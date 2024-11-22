const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile = document.getElementById('profile')
const author = document.getElementById('name')
const date = document.getElementById('date')

const bgs = document.querySelectorAll('.animated-bg')
const texts = document.querySelectorAll('.text')


setTimeout(getData, 3000)

function getData() {

    bgs.forEach(bg => bg.classList.remove('animated-bg'))
    texts.forEach(bg_txt => bg_txt.classList.remove('text')) 

    header.innerHTML = `<img class="max-w-full h-full w-full object-cover" src="https://picsum.photos/seed/xuzmonomi/600/400" alt="">`
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML =`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, repudiandae.`
    profile.innerHTML = `<img class="max-w-full bg-gray-100" src="https://picsum.photos/id/237/300/300" alt="author profile icon">`
    author.innerHTML = `Xuzmomomi`
    date.innerHTML = `Oct 31, 2024`

    
}



