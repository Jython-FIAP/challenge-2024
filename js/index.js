var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-show");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].classList.add("active");
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
    }