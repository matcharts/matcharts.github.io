const navbar = document.querySelector('.navBar');
const bMenu = document.querySelector('.b-menu');
const navLinks = document.querySelector('.nav_links');

// Effet de scroll sur la navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.7)";
    }
});

// Menu responsive pour mobile
if (bMenu) {
    bMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

if (carousel && prevButton && nextButton) {
    const scrollAmount = 960; // Largeur d'un élément (300px) + gap (20px)
    const items = carousel.querySelectorAll('.carousel-item');

    // Bouton "Suivant"
    nextButton.addEventListener('click', () => {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth; // Position maximale de défilement
        const currentScroll = carousel.scrollLeft;

        // Si on est à la fin (ou presque), revenir au début
        if (currentScroll >= maxScroll - 1) { // -1 pour gérer les arrondis
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });

    // Bouton "Précédent"
    prevButton.addEventListener('click', () => {
        const currentScroll = carousel.scrollLeft;

        // Si on est au début, aller à la fin
        if (currentScroll <= 0) {
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    });
}

//Fonctions pour animation de scroll
document.querySelectorAll('.descendsAbout').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Empêche le jump instantané
      const target = document.querySelector('#descendAbout');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

document.querySelectorAll('.descendsEvent').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le jump instantané
    const target = document.querySelector('#descendEvent');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fonction pour commentaires clients
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.querySelector('.testimonial-dots');
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');

document.addEventListener('DOMContentLoaded', () => {
  // Testimonial carousel elements
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.testimonial-dots');
  const nextBtn = document.querySelector('.right-arrow');
  const prevBtn = document.querySelector('.left-arrow');

  let currentIndex = 0;
  let dots = [];

  if (!slides.length || !dotsContainer || !nextBtn || !prevBtn) {
    return; // exit if missing elements
  }

  // Show slide by index
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  // Generate dots dynamically
  function generateDots() {
    dotsContainer.innerHTML = '';
    dots = [];

    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });
  }

  nextBtn.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  });

  prevBtn.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  });

  generateDots();
  showSlide(currentIndex);
});



//Fonction pour la page contact
document.addEventListener('DOMContentLoaded', () => {
  const equipementInput = document.getElementById('equipement');
  const suggestionsBox = document.getElementById('suggestions');
  const selectedEquipementsContainer = document.getElementById('selected-equipements');
  const equipementsHiddenInput = document.getElementById('equipements-hidden');

  if (!equipementInput) return;

  const equipementList = [
    "Microphone", "Table de mixage", "Enceintes", "Pieds de micro", "Éclairage LED",
    "Projecteurs", "Câbles XLR", "Rallonges électriques", "Machine à fumée", "Platines",
    "Écran", "Support DJ", "Ampli", "Caisson de basse", "Casque audio", "Mixing Desk", 
    "Speakers", "Microphone Stands", "LED Lighting",
    "Projectors", "XLR Cables", "Extension Cords", "Smoke Machine", "Turntables",
    "Screen", "DJ Stand", "Amplifier", "Subwoofer", "Headphones"
  ];

  let selectedEquipements = [];

  equipementInput.addEventListener('input', () => {
    const inputVal = equipementInput.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (inputVal.length === 0) return;

    const filtered = equipementList.filter(item =>
      item.toLowerCase().includes(inputVal) &&
      !selectedEquipements.includes(item)
    );

    filtered.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.addEventListener('click', () => {
        selectedEquipements.push(item);
        updateSelectedEquipements();
        equipementInput.value = '';
        suggestionsBox.innerHTML = '';
      });
      suggestionsBox.appendChild(li);
    });
  });

  function updateSelectedEquipements() {
    selectedEquipementsContainer.innerHTML = '';
    
    selectedEquipements.forEach((item, index) => {
      const div = document.createElement('div');
      div.classList.add('selected-item');
  
      const spanText = document.createElement('span');
      spanText.textContent = item;
  
      const removeBtn = document.createElement('span');
      removeBtn.innerHTML = '   &times;';
      removeBtn.classList.add('remove-btn');
      removeBtn.addEventListener('click', () => {
        selectedEquipements.splice(index, 1);
        updateSelectedEquipements();
      });
  
      div.appendChild(spanText);
      div.appendChild(removeBtn);
      selectedEquipementsContainer.appendChild(div);
    });
  
    equipementsHiddenInput.value = selectedEquipements.join(', ');
  }
  
});

const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
