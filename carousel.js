var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};

    for (let i = 0, length = slides.length; i < length; i++) {
        slides[i].style.display = "none"; 
    }

    for (let i = 0, length = dots.length; i < length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active";
}