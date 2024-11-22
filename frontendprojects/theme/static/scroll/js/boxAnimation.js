const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
    const triggerPoint = window.innerHeight / 4 * 3;
    console.log(triggerPoint)

    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerPoint) {
            if (index % 2 === 0) {
                box.classList.remove('translate-x-[500%]');
                box.classList.add('translate-x-0');
            } else {
                box.classList.remove('translate-x-[-500%]');
                box.classList.add('translate-x-0');
            } 
        } else {
            if (index % 2 === 0) {
                box.classList.remove('translate-x-0');
                box.classList.add('translate-x-[500%]');
            } else {
                box.classList.remove('translate-x-0');
                box.classList.add('translate-x-[-500%]');
            } 
        }
    });
};

window.addEventListener('scroll', checkBoxes); 

checkBoxes(); 




