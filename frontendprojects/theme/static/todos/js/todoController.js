const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')

form.addEventListener('submit', (e) =>  {
    e.preventDefault()

    addTodo() 
});

const todoList = JSON.parse(localStorage.getItem('todoList'))

if (todoList) {
    todoList.forEach(item => {
        addTodo(item)
    });
}

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.classList.add('hover:bg-teal-400', 'pl-2', 'py-2', 'border-t-2');

        if (todo && todo.completed) {
            todoEl.classList.add('completed', 'text-gray-200');
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
        });

        todos.appendChild(todoEl);
        input.value = '';

        updateLocalToDo()
    }
}

function updateLocalToDo() {
    const todoEls = document.querySelectorAll('#todos li')

    console.log(todoEls)

    const todoList = []

    todoEls.forEach(item => {
        todoList.push({
            text: item.innerText,
            completed: item.classList.contains('completed')
            }
        )
    })

    localStorage.setItem('todoList', JSON.stringify(todoList))
}

