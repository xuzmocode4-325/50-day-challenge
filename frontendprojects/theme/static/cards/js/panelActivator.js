/**
 * Adds a click event listener to each panel element.
 * When a panel is clicked, it removes the 'active' class from all panels
 * and adds the 'active' class to the clicked panel.
 */
const panels = document.querySelectorAll('.panel'); // Ensure you are selecting the correct elements

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('display-solo');
    })
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log('Panel clicked:', panel); // Log the clicked panel
        removeActiveClasses();
        panel.classList.add('active');
        console.log('Active class added:', panel.classList.contains('active')); // Log if the active class was added
    });
});
