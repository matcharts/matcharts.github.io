
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
    const scrollAmount = carousel.clientWidth; // Largeur visible du carrousel

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

let currentIndex = 0;
let dots = [];

// Génère les dots dynamiquement
function generateDots() {
  dotsContainer.innerHTML = '';
  dots = [];

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentIndex) dot.classList.add('active');

    dot.addEventListener('click', () => {
      changeSlide(i);
    });

    dotsContainer.appendChild(dot);
    dots.push(dot);
  });
}

// Gère le changement avec animation
function changeSlide(index) {
  if (index === currentIndex) return;

  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');

  currentIndex = index;

  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

if (nextBtn && prevBtn && slides.length && dotsContainer) {
  nextBtn.addEventListener('click', () => {
    let nextIndex = (currentIndex + 1) % slides.length;
    changeSlide(nextIndex);
  });

  prevBtn.addEventListener('click', () => {
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(prevIndex);
  });

  generateDots();
}


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


const siteData = {
    index: {
        fr: {
            home: "Accueil",
            about: "À propos",
            event: "Événements",
            hero: ["DJ pour votre prochain événement","Réserver"],
            events: [
                "Événements récents", "Réactions de foule", "Saison des bals 2025", 
                "Pangea","Poubelle Magnifique","Ping Pong Club","Corporatif","Partenaires",
            ],
            infos: [
                "Le personnage de Mat Charts est né d'une idée : partager la musique et l’ambiance qu’il aime vivre en tant que spectateur.",
                "Il se distingue par sa capacité à superposer des éléments connus et nouveaux, pour créer des sonorités uniques. Maître de plusieurs styles, ses sets disco et house sont parmi les plus mémorables.",
                "Il est également producteur, ce qui lui permet de définir son propre style. Il mise sur une préparation méticuleuse et une sélection de qualité, adaptée à son public.",
                "Ses performances dans plusieurs établissements et événements réputés de Montréal, ainsi qu'une bonne présence sur les réseaux sociaux l'ont fait découvrir par de nombreux fans."
            ],
            com:[
                { text: "Mat sait exactement comment garder son audience engagée. C'est un artiste polyvalent et fiable qui peut lire un public sans effort. Et c'est toujours un plaisir de travailler avec lui.", author: "Daniel Scocco, Baroque Agency" },
                { text: "Sur son travail, nous n'avons reçu que des bons commentaires. Bravo", author: "André L'Heureux, Société du Vieux-Port de Montréal" },
                { text: "L'événement a bien été et le client a apprécié la musique. Merci !", author: "Anhanh Dieu, Rhoddy Marketing" },
                {text: "Il a de belles qualités pour être DJ, calme, posé, et sembles très focus... Sélection musicale adaptée.", author:"Jean-Pierre Drolet, Productions Technomage"},
                {text:"On voulait te remercier d'avoir mixé pour nous, l'ambiance et la musique étaient géniales !", author:"Alya Essafi, Sororité Nu Delta Mu"},
                {text:"Son professionnalisme et sa courtoisie ont contribué au succès de notre événement.", author:"Catherine Leduc, Hélicoptères Canada"}
            ]
        },
        en: {
            home: "Home",
            about: "About",
            event: "Events",
            hero: ["DJ for your next event","Book Now"],
            events: [
                "Events", "Crowd Reaction", "Bal season 2025", 
                "Pangea","Magnificent Trash","Ping Pong Club","Corporate","Partners",
            ],
            infos: [
                "Mat Charts was born from a simple desire: share the music and energy that he likes to experience as an event-goer.",
                "What sets him apart is his ability to layer elements to create unique sounds—ones that feel fresh yet instantly recognizable. His disco and house sets are some of the most memorable.",
                "He is also a producer, allowing him to define a unique style. His music selection is his pride and joy. He updates his playlists to maintain a high-quality sound selection tailored to his audience.",
                "His performances in many of Montreal's popular venues and events as well as a maintained social media presence have made him known to many fans and consolidated his reputation in the city."
            ],
            com:[
                { text: "Mat knows exactly how to keep a crowd engaged. He’s a versatile and reliable performer who can read the room effortlessly. And he’s been a pleasure to work with.", author: "Daniel Scocco, Baroque Agency" },
                { text: "On his work as a DJ, we have received only positive feedback. Congratulations!", author: "André L'Heureux, Old Port of Montreal Corporation" },
                { text: "The event went well and the client enjoyed the music. Thank you !", author: "Anhanh Dieu, Rhoddy Marketing" },
                {text: "He has some beautiful qualities to be a DJ, calm, composed and seems very focused... And curated musical selection", author: "Jean-Pierre Drolet, Technomage Productions"},
                {text: "We wanted to thank you for playing for us, the atmosphere and music were on point !", author:"Alya Essafi, Nu Delta Mu Sorority"},
                {text: "His professionalism and courtesy contributed to the success of our event.", author:"Catherine Leduc, Canadian Helicopters"}
            ]
        }
    }
};

// Fonction pour remplir le site selon la langue
function loadLang(lang){
    const data = siteData.index[lang];
    document.getElementById("linkHome").textContent = data.home;
    document.getElementById("linkAbout").textContent = data.about;
    document.getElementById("linkEvent").textContent = data.event;
    document.getElementById("heroSubtitle").textContent = data.hero[0];
    document.getElementById("heroButton").textContent = data.hero[1];
    document.getElementById("eventsTitle").textContent = data.events[0];

    // Events
    const carousel = document.getElementById("carouselEvents");
    carousel.innerHTML = "";

    for (let i = 1; i < data.events.length; i++) {
        const eventId = i; // correspond à E1, E2, E3...

        // lien
        const link = document.createElement("a");
        link.href = `event.html?event=${eventId}&lang=${lang}`;
        link.className = "carousel-link";

        // item
        const item = document.createElement("div");
        item.className = "carousel-item event-item";
        item.id = `E${eventId}`;

        // texte
        const span = document.createElement("span");
        span.textContent = data.events[i];

        item.appendChild(span);
        link.appendChild(item);
        carousel.appendChild(link);
    }

    // About infos
    const about = document.getElementById("aboutTexts");
    about.innerHTML = "";
    data.infos.forEach(p=>{
        const para = document.createElement("p");
        para.textContent = p;
        about.appendChild(para);
    });

    // Testimonials
    const test = document.getElementById("testimonials");
    test.innerHTML = "";

    data.com.forEach((c, i) => {
        const div = document.createElement("div");
        div.className = "testimonial-slide";
        if (i === 0) div.classList.add("active"); // slide visible
        div.innerHTML = `<p>"${c.text}"<br><em>- ${c.author}</em></p>`;
        test.appendChild(div);
    });

    // 🔁 rebind après injection
    initTestimonials();
}

// Switcher de langue
document.querySelectorAll(".lang-switcher button").forEach(btn=>{
    btn.addEventListener("click",()=>{
        const lang = btn.dataset.lang;
        document.documentElement.lang = lang;
        loadLang(lang);
    });
});

// Chargement initial
loadLang("fr");

function initTestimonials() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.testimonial-dots');
    const nextBtn = document.querySelector('.right-arrow');
    const prevBtn = document.querySelector('.left-arrow');

    if (!slides.length || !dotsContainer) return;

    let currentIndex = 0;
    dotsContainer.innerHTML = "";

    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = "dot";
        if (i === 0) dot.classList.add("active");

        dot.addEventListener("click", () => changeSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function changeSlide(index) {
        slides[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");

        currentIndex = index;

        slides[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    nextBtn.onclick = () =>
        changeSlide((currentIndex + 1) % slides.length);

    prevBtn.onclick = () =>
        changeSlide((currentIndex - 1 + slides.length) % slides.length);
}
