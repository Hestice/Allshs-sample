document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".carousel-slide");
    var dots = document.querySelectorAll(".dot");
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

      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
  
      dots[currentSlide].classList.add("active");
    }
  
    window.nextSlide = function() {
      currentSlide++;
      showSlide(currentSlide);
    };

    window.prevSlide = function() {
      currentSlide--;
      showSlide(currentSlide);
    };

    window.currentSlide = function(n) {
      currentSlide = n;
      showSlide(currentSlide);
    };
  
    setInterval(nextSlide, 5000); // Change slide every 3 seconds
  
    showSlide(currentSlide);
  });
  
  // Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
