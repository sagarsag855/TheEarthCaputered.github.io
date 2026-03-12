// Dark Light Mode

const toggle = document.getElementById("mode-toggle");

if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light");
toggle.textContent="☀️";
}

toggle.addEventListener("click", function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
toggle.textContent="☀️";
localStorage.setItem("theme","light");
}else{
toggle.textContent="🌙";
localStorage.setItem("theme","dark");
}

});

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
