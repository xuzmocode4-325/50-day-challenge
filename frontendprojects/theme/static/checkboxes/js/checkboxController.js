const goodBox = document.getElementById('good')
const cheapBox = document.getElementById('cheap')
const fastBox = document.getElementById('fast')

const boxes = [goodBox, cheapBox, fastBox] 

// console.log(boxes)



boxes.forEach(box => {
    box.addEventListener('change', (e) => {
        // Get the corresponding label
        const label = document.querySelector(`label[for="${box.id}"]`);
        // Get the ball div inside the label
        const ball = label.querySelector('div');

        doTheTrick(e.target)

        if (box.checked) {
            ball.classList.remove('animate-slide-off'); 
            ball.classList.add('animate-slide-on'); 
        } else {
            ball.classList.add('animate-slide-off'); 
            ball.classList.remove('animate-slide-on'); 
        }

       
    });
});

function doTheTrick(clickedOne) {
    if (goodBox.checked && cheapBox.checked && fastBox.checked) {
        if (goodBox === clickedOne) {
            fastBox.checked = false
            const label = document.querySelector(`label[for="${fastBox.id}"]`);
            const ball = label.querySelector('div');
            ball.classList.add('animate-slide-off'); 
            ball.classList.remove('animate-slide-on'); 
        }
        if (cheapBox === clickedOne) {
            goodBox.checked = false
            const label = document.querySelector(`label[for="${goodBox.id}"]`);
            const ball = label.querySelector('div');
            ball.classList.add('animate-slide-off'); 
            ball.classList.remove('animate-slide-on');
        }
        if (fastBox == clickedOne) {
            cheapBox.checked = false
            const label = document.querySelector(`label[for="${cheapBox.id}"]`);
            const ball = label.querySelector('div');
            ball.classList.add('animate-slide-off'); 
            ball.classList.remove('animate-slide-on'); 
        }
    }
}