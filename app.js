// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// add event listener to navToggle to check if classList show-class 
// exists (using contain) 
navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});

// links.classList.toggle("show-links");

