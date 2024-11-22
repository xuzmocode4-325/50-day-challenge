const colors =[
    '#e11d48',
    '#be185d',
    '#c026d3',
    '#a855f7',
    '#7c3aed',
    '#8b5cf6',
    '#4f46e5',
    '#3b82f6',
    '#38bdf8',
    '#22d3ee',
    '#2dd4bf',
    '#10b981',
    '#4ade80',
    '#bef264',
    '#fde047',
    '#f59e0b',
    '#f97316',
    '#ef4444'
]

const size = 33

function initializeGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear any existing content

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('flex', 'gap-1', 'md:gap-2'); // Ensure each row is a flex container

        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.id = 'square';
            square.classList.add(
                'bg-gray-700', 'hover:duration-0', 'shadow-md', 
                'shadow-gray-800', 'h-3', 'w-3', 'rounded-sm', 
                'transition-all', 'duration-1000', 'ease-linear', 
                'cursor-pointer', 'sm:h-4', 'sm:w-4', 'md:h-6', 'md:w-6', 
            );
            square.addEventListener('mouseover', () => {
                setColour(square)
            })
            square.addEventListener('mouseout', () => {
                removeColor(square)
            })

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}


function setColour(element) {
    const color = getRandomColor()
    element.style.background = color
}

function removeColor(element) {
    //console.log(element)
    element.style.background = '#44403c'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

// Initialize a 1x1 grid
initializeGrid(33);
