const bg = document.getElementById('slide-bg');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

console.log(slides, leftBtn, rightBtn)

let activeSlide = 0;
console.log(activeSlide)


const setMainBackground = () => {
    bg.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};


rightBtn.addEventListener('click', () => changeSlide(1));
leftBtn.addEventListener('click', () => changeSlide(-1));

const setActiveSlide = () => {
    slides.forEach(slide => slide.classList.remove('activated'));
    slides[activeSlide].classList.add('activated');
};

const changeSlide = (direction) => {
    activeSlide += direction;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    } else if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    setMainBackground();
    setActiveSlide();
};



setMainBackground();
