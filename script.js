document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".carousel-slide");
    var currentSlide = 0;
  
    function showSlide(n) {
      if (n >= slides.length) {
        currentSlide = 0;
      } else if (n < 0) {
        currentSlide = slides.length - 1;
      }
  
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
  
      slides[currentSlide].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide++;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 5000); // Change slide every 3 seconds
  
    showSlide(currentSlide);
  });
  