function slider() {

let slides = document.querySelectorAll('.main-slider .main-slider-item');
let currentSlide = 0;
let slideTimeout = setTimeout(nextSlide, 500);
let slideInterval = setInterval(nextSlide,8000);
 
function nextSlide() {
    slides[currentSlide].className = 'main-slider-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'main-slider slideDown';
	};
}	


module.exports = slider;