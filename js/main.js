// Enter your code below.
// Ensure DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Step 1: Select the elements from the DOM
    const showResourcesButton = document.getElementById("show-resources");
    const resourcesDiv = document.querySelector(".javascript-resources");
  
    // Step 2: Add an event listener for the click event on the button
    showResourcesButton.addEventListener("click", function() {
      // Step 3: Remove the "d-none" class to show the resources
      resourcesDiv.classList.remove("d-none");
    });
  });
  