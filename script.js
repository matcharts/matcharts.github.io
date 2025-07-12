// === NAVBAR EFFECT ON SCROLL ===
const navbar = document.querySelector('.navBar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.9)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.7)";
  }
});

// === MOBILE MENU TOGGLE ===
const bMenu = document.querySelector('.b-menu');
const navLinks = document.querySelector('.nav_links');
if (bMenu && navLinks) {
  bMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// === SMOOTH SCROLLING LINKS ===
document.querySelectorAll('.descendsAbout').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#descendAbout')?.scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelectorAll('.descendsEvent').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#descendEvent')?.scrollIntoView({ behavior: 'smooth' });
  });
});

// === IMAGE CAROUSEL (Événements) ===
const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');

if (carousel && nextButton && prevButton) {
  const scrollAmount = 320;

  nextButton.addEventListener('click', () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const currentScroll = carousel.scrollLeft;
    if (currentScroll >= maxScroll - 1) {
      carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  });

  prevButton.addEventListener('click', () => {
    const currentScroll = carousel.scrollLeft;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    if (currentScroll <= 0) {
      carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });
}

// === TESTIMONIALS ===
const slides = document.querySelectorAll(".testimonial-slide");
const prevArrow = document.querySelector(".left-arrow");
const nextArrow = document.querySelector(".right-arrow");
const dotsContainer = document.querySelector(".testimonial-dots");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i]?.classList.toggle("active", i === index);
  });
}

function generateDots() {
  dotsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
    dotsContainer.appendChild(dot);
  });
}

if (slides.length > 0 && prevArrow && nextArrow && dotsContainer) {
  generateDots();
  const dots = document.querySelectorAll(".dot");

  prevArrow.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextArrow.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
}

// === CONTACT PAGE: Date Picker (optional) ===
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
