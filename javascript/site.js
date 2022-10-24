// Place your general js functionality here should you need to

// Array with gallery images + their titles
const slides = [
    { 
        imgSrc: "images/img_maingallery_couplemountains.jpg",
        h1: "Explore the breathtaking mountain ranges",
    },
    
    { 
        imgSrc: "images/img_maingallery_manonrock.jpg",
        h1: "The best view comes after the hardest climb",
    },

    { 
        imgSrc: "images/img_maingallery_streetlights.jpg",
        h1: "Sit back and watch the world go by",
    },
];

let currentSlide = 0;

window.onload = function() {
    // Event to give the active class to elements when the toggle (hamburger menu) is clicked
    const menuToggle = document.querySelector('.toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle("active");
        navbar.classList.toggle("active");
    });

    // Sets the active class as default when on desktop sized window
    if(window.innerWidth > 1250) {
        navbar.classList.add("active");
    }

    // Closes any open menus when the browser is resized.
    window.addEventListener('resize', () => {
        navbar.classList.remove("active");
    });

    // Dynamically fills in the image src and replaces the heading + cycle through
    const slide = document.querySelector(".slideimg");
    const title = document.querySelector(".slidetitle");
    const prev = document.querySelector(".leftarrow");
    const next = document.querySelector(".rightarrow");

    slide.src = slides[currentSlide].imgSrc;
    title.textContent = slides[currentSlide].h1;
    
    
    prev.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length -1;
        }
        slide.src = slides[currentSlide].imgSrc;
        title.textContent = slides[currentSlide].h1;
    });
    next.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide > slides.length - 1) {
            currentSlide = 0;
        }
        slide.src = slides[currentSlide].imgSrc;
        title.textContent = slides[currentSlide].h1;
    });
};







