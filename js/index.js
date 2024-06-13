// Botão saiba mais
document.querySelector('.btn-saiba').addEventListener('click', function() {
    var maisInfo = document.getElementById('maisInfo');
    maisInfo.classList.toggle('mostrar');
});

// Slide-Show
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Iniciar o carrossel automaticamente
document.addEventListener('DOMContentLoaded', () => {
    startAutoSlide();
});

// Pausar o carrossel ao passar o mouse sobre ele
document.querySelector('.carousel').addEventListener('mouseover', stopAutoSlide);

// Retomar o carrossel ao remover o mouse
document.querySelector('.carousel').addEventListener('mouseout', startAutoSlide);
