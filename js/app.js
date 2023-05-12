/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
// creating a dynamically  navigation bar
let ul = document.getElementById("navbar__list");
const sections = Array.from(document.getElementsByTagName("section"));
for([index,section] of sections.entries()){
  const item = document.createElement("li");
  ul.appendChild(item);
  item.append("Section"+ (index+1));
}
const pageSections = document.querySelectorAll("section");
const navigationB = document.querySelectorAll("li");
navigationB[0].classList.add("active");

document.addEventListener('scroll', function() {
    if (window.pageYOffset >= 495 && window.pageYOffset < 1315) {
        navigationB[0].classList.add("active");
        navigationB[1].classList.remove("active");
        navigationB[2].classList.remove("active");
        navigationB[3].classList.remove("active");
    } else if (window.pageYOffset >= 1315 && window.pageYOffset < 2051) {
        navigationB[1].classList.add("active");
        navigationB[0].classList.remove("active");
        navigationB[2].classList.remove("active");
        navigationB[3].classList.remove("active");


    } else if (window.pageYOffset >= 2051 && window.pageYOffset < 2807) {
        navigationB[2].classList.add("active");
        navigationB[1].classList.remove("active");
        navigationB[0].classList.remove("active");
        navigationB[3].classList.remove("active");


    } else if (window.pageYOffset >= 2807) {
        navigationB[3].classList.add("active");
        navigationB[1].classList.remove("active");
        navigationB[2].classList.remove("active");
        navigationB[0].classList.remove("active");


    }
});



// select which section is active
navigationB[0].addEventListener("click", function() {
    navigationB[1].classList.remove("active");
    navigationB[2].classList.remove("active");
    navigationB[3].classList.remove("active");
    navigationB[0].classList.add("active");
    window.scrollTo(0, 550);




});
navigationB[1].addEventListener("click", function() {
    navigationB[0].classList.remove("active");
    navigationB[2].classList.remove("active");
    navigationB[3].classList.remove("active");
    navigationB[1].classList.add("active");
    window.scrollTo(0, 1350);



});
navigationB[2].addEventListener("click", function() {
    navigationB[1].classList.remove("active");
    navigationB[0].classList.remove("active");
    navigationB[3].classList.remove("active");
    navigationB[2].classList.add("active");
    window.scrollTo(0, 2170);




});
navigationB[3].addEventListener("click", function() {
    navigationB[3].classList.add("active");
    navigationB[1].classList.remove("active");
    navigationB[2].classList.remove("active");
    navigationB[0].classList.remove("active");
    e.preventDefault();
    window.scrollTo(0, 3000);

});
// click on the section button will scroll down to the section
