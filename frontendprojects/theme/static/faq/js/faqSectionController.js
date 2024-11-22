const faqBtn = document.querySelectorAll("#faq-toggl")

faqBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('activated')

    })
})