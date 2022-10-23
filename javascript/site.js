// Place your general js functionality here should you need to
// Function to give the active class to elements when the toggle (hamburger menu) is clicked
window.onload = function() {
    const menuToggle = document.querySelector('.toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle("active");
        navbar.classList.toggle("active");
    });

    // Sets the active class as default when on desktop sized window
    if(window.innerWidth > 1250) {
        navbar.classList.toggle("active");
    }
}