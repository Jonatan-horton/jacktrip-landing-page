// This code block creates a nav list dynamically
const navList = document.querySelector('.nav-menu');
const navMenu = ['Home', 'About', 'Plans', 'Help', 'Register'];

// code fragment to help with performance of website
const fragment = new DocumentFragment();

navMenu.forEach(function (navItem) {
    const navA = document.createElement('a');
    navA.innerHTML = navItem;
    navA.setAttribute('class', 'current');
    navA.setAttribute('href', `#${navItem}`);
    const navLink = document.createElement('li');
    navLink.appendChild(navA);
    fragment.appendChild(navLink);
})

navList.appendChild(fragment);

// get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighted);

function navHighlighted() {
  
  // get current scroll position
  let scrollY = window.pageYOffset;
  
  // loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - if the current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - to know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

/* This code makes the slider switch photos every 4 secs */
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

/* This code takes the #nav id and applies a css rule that makes the nav sticky when scrolling */
document.addEventListener('scroll', function () {
    const navHeader = document.querySelector('#nav');
    const topOfNav = navHeader.clientHeight;

    function changeNav() {
        if (window.scrollY >= topOfNav - topOfNav + 1) {
            document.body.classList.add('sticky');
        } else {
            document.body.classList.remove('sticky');
        }
    }

    document.addEventListener('scroll', changeNav)
});