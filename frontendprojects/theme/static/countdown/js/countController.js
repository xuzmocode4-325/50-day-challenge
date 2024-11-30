const counter = document.querySelector('#counter')
const message = document.querySelector('#final')
const replay = document.querySelector('#counter')

// console.log(nums)
// console.log(counter)
// console.log(message)
// console.log(replay)


displaySpansSequentially();

function displaySpansSequentially() {
    const spans = document.querySelectorAll('#nums span');
    const counterDiv = document.getElementById('counter');
    const finalDiv = document.getElementById('final');
    const delay = 2500; // 1 second delay between each span
    
    spans.forEach((span, index) => {
        setTimeout(() => {
            // Hide previous span if it exists
            if (index > 0) {
                spans[index - 1].classList.add('hidden');
            }
            // Show current span
            span.classList.remove('hidden');
            
            // Handle the last span
            if (index === spans.length - 1) {
                setTimeout(() => {
                    span.classList.add('hidden');
                    // Hide counter and show final div after the last span
                    counterDiv.classList.add('hidden');
                    finalDiv.classList.remove('hidden');
        
                }, delay);
            }
        }, delay * index);
    });
}

// Add event listener for the replay button
document.getElementById('replay').addEventListener('click', () => {
    document.getElementById('final').classList.add('hidden');
    document.getElementById('counter').classList.remove('hidden');
    displaySpansSequentially();
});
