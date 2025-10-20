const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.menu-close');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
let autoSlide;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlideFunc() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 4000);
}
function stopAutoSlide() {
  clearInterval(autoSlide);
}

menuToggle.addEventListener('click', () => {
  const isActive = menuOverlay.classList.toggle('active');
  menuToggle.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isActive);
  document.body.style.overflow = isActive ? 'hidden' : 'auto';

  if (isActive) startAutoSlide();
  else stopAutoSlide();
});

closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = 'auto';
  stopAutoSlide();
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlideFunc);
