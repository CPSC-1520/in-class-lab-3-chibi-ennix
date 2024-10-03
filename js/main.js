// Enter your code below.
document.addEventListener("DOMContentLoaded", () => {
    const resourcesDiv = document.querySelector('.javascript-resources');

    // Mouseover event
    resourcesDiv.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.add('fw-bold');
        }
    });

    // Mouseout event
    resourcesDiv.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.remove('fw-bold');
        }
    });

    // Click event
    resourcesDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.add('fst-italic');
        }
    });
});
