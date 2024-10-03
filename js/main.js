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

  // Step 4: Add event listeners to the resource links for hover and click interactions
  resourcesDiv.addEventListener("mouseover", function(event) {
      // Ensure the event.target is a link within the list group items
      if (event.target.tagName === "A") {
          // Add the "fw-bold" class when hovering over a link
          event.target.classList.add("fw-bold");
      }
  });

  resourcesDiv.addEventListener("mouseout", function(event) {
      // Ensure the event.target is a link within the list group items
      if (event.target.tagName === "A") {
          // Remove the "fw-bold" class when the mouse leaves the link
          event.target.classList.remove("fw-bold");
      }
  });

  // Step 5: Italicize a clicked item
  resourcesDiv.addEventListener("click", function(event) {
      // Ensure the event.target is a link
      if (event.target.tagName === "A") {
          // Add the "fst-italic" class to italicize the clicked link
          event.target.classList.add("fst-italic");
      }
  });
});
