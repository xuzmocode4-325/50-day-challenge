const ratings = document.querySelectorAll('.rating')
const sendBtn = document.getElementById('send')
const panel  = document.getElementById('panel')
let selectedRating = ''

panel.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('border-red-300')
        selectedRating = e.target.nextElementSibling.innerHTML
        console.log(selectedRating)
    }
})

sendBtn.addEventListener('click', (e) => {
    if (selectedRating !== '') {
        panel.innerHTML = `
        <div class="flex flex-col gap-2 m-8">
            <i class="fas fa-heart"></i>
            <strong> Thank You! </strong>
            <br>
            <strong>Your Feedback: ${selectedRating} </strong>
            <p class="mt-2">We'll use your feedback to improve our customer
            support</p>
        </div>
        `
    }
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('border-red-300')
    }
}