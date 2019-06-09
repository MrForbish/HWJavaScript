function sliderReviews() {
  var arrowLeft = document.querySelector('.main-prev-btn');
  var arrowRight = document.querySelector('.main-next-btn');
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlide (n) {
    showSlides(slideIndex += n);
  }

  arrowLeft.addEventListener('click', function() {
    plusSlide(-1);
  });
    
  arrowRight.addEventListener('click', function() {
    plusSlide(1);
  });

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("feedback-slider-item");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
     slides[slideIndex - 1].style.display = "block";
  }   
};

module.exports = sliderReviews;