// Enter your code below.
// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Select the required elements
    const showResourcesButton = document.getElementById("show-resources");
    const resourcesDiv = document.querySelector(".javascript-resources");

    // Step 2: Add click event listener on the "Show Resources" button
    showResourcesButton.addEventListener("click", function () {
        // Step 3: Remove the "d-none" class to display the resources
        resourcesDiv.classList.remove("d-none");
    });

    // Step 4: Add mouseover event listener to add boldness to hovered items
    resourcesDiv.addEventListener("mouseover", function (event) {
        // Ensure the event target is a list item in the group
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.add('fw-bold');
        }
    });

    // Step 5: Add mouseout event listener to remove boldness when mouse leaves
    resourcesDiv.addEventListener("mouseout", function (event) {
        // Ensure the event target is a list item in the group
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.remove('fw-bold');
        }
    });

    // Step 6: Add click event listener to italicize clicked items
    resourcesDiv.addEventListener("click", function (event) {
        // Ensure the event target is a list item in the group
        if (event.target.classList.contains('list-group-item')) {
            event.target.classList.add('fst-italic');
        }
    });
});
