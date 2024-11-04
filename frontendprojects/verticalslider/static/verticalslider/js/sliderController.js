const sliderContainer = document.getElementById('slider-container')
const rightSlide = document.getElementById('right-slide')
const leftSlide = document.getElementById('left-slide')
const rightBtn = document.getElementById('up-right')
const leftBtn = document.getElementById('down-left')
const slides = rightSlide.querySelectorAll('div')

const slidesLen = slides.length

let activeSlideIndex = 0

leftSlide.style.top = `-${(slidesLen - 1)} * 100vh`

rightBtn.addEventListener('click', () => changeSlide('up'))
leftBtn.addEventListener('click', () => changeSlide('down'))


const changeSlide  = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if (direction === 'up') {
        activeSlideIndex ++ 

        if (activeSlideIndex > slidesLen - 1 ) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex --

        if (activeSlideIndex < 0 ) {
            activeSlideIndex =  slidesLen
        }

    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${slidesLen - activeSlideIndex * sliderHeight}px)`
}