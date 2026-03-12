// Dark Light Mode

const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
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
