// Dark Light Mode

const toggle = document.getElementById("mode-toggle");

toggle.onclick = () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light"))
toggle.textContent="☀️";
else
toggle.textContent="🌙";

}


// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = () => {

navLinks.classList.toggle("active");

}


// Lightbox Gallery

const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const close = document.querySelector(".close");

images.forEach(img => {

img.onclick = () => {

lightbox.style.display="flex";
lightboxImg.src=img.src;

}

})

close.onclick = () => {

lightbox.style.display="none";

}


// Contact Button

function contact(){

window.location.href="mailto:yourmail@gmail.com";

}
