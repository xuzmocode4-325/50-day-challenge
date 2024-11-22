const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')


const classes ='py-1 px-2 bg-blue-300 m-1 gap-2 tag rounded inline-block'

//textArea.focus()

textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

const createTags = (input) => {
    const tags = input.split(',').filter(
        tag => tag.trim() !== ''
        ).map(
        tag => tag.trim()
    )

    tagsEl.innerHTML = ''

    tags.forEach(tag => {

        const tagEl = document.createElement('span')
        tagEl.className = `${classes} tag`;
        tagEl.textContent = tag;
        tagEl.id = 'tag'; // Set the id here

tagsEl.appendChild(tagEl);

        tagsEl.appendChild(tagEl)
    });

    console.log(tags)
}
const pickRandomTag = () => {
    const tags = document.querySelectorAll('#tag');
    console.log(tags)
    return tags[Math.floor(Math.random() * tags.length)];
}

const highlightTag = (tag) => {
    tag.classList.remove('bg-blue-300')
    tag.classList.add('bg-green-300')
}

const removeHighlight = () => {
    tag.classList.remove('bg-green-300')
    tag.classList.add('bg-blue-300')
}

const randomSelect = () => {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            removeHighlight(randomTag)
        }, 100)

    }, 100);
}

