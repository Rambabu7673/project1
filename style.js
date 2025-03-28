function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}



let index = 0;

function moveSlide(step) {
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  
  index += step;

  if (index >= totalSlides) {
    index = 0;
  } else if (index < 0) {
    index = totalSlides - 1;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 3000);
