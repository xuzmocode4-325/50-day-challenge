const addBtn = document.getElementById('add')
const pad = document.getElementById('pad')

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note', 'bg-white', 'w-80', 'h-80', 'shadow-md', 'shadow-black/10', 
        'my-8', 'mx-4', 'rounded-lg', 'relative'
    )

   note.innerHTML = `
    <div class="tools bg-lime-500 text-white flex justify-end gap-4 p-1 rounded-t-lg">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="main ${text ? '' : 'hidden'} p-4"></div>
    <textarea name="" id="" class="border-0
        ${text ? 'hidden' : ''}
        outline-none w-full h-72 p-4 rounded-b-lg">
    </textarea>
    `;

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked.parse(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateStorage()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked.parse(value)

        updateStorage()
    })

    pad.appendChild(note)
}


function updateStorage() {
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))

}