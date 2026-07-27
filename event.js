// Données minimales pour la navigation des events
const navData = {
    fr: {
        home: "Accueil",
        about: "À propos",
        event: "Événements",
        contact: "Contact",
        switchLang: "EN"
    },
    en: {
        home: "Home",
        about: "About",
        event: "Events",
        contact: "Contact",
        switchLang: "FR"
    }
};

// Fonction pour remplir les textes de navigation sur les pages event
function loadLangEvent(lang) {
    const data = navData[lang];

    document.getElementById("linkHome").textContent = data.home;
    document.getElementById("linkAbout").textContent = data.about;
    document.getElementById("linkEvent").textContent = data.event;
    document.getElementById("linkContact").textContent = data.contact;

    const switchBtn = document.getElementById("switchLang");
    switchBtn.textContent = data.switchLang;
    switchBtn.dataset.lang = lang === "fr" ? "en" : "fr";

    // Changement de langue simple : recharge la page en gardant l'eventId
    switchBtn.onclick = () => {
        const params = new URLSearchParams(window.location.search);
        const eventId = params.get("event") || 1;
        const newLang = switchBtn.dataset.lang;
        window.location.search = `?event=${eventId}&lang=${newLang}`;
    };
}

// Récupération de la langue depuis l'URL (sinon fr par défaut)
const param = new URLSearchParams(window.location.search);
const lang = param.get("lang") || "fr";
loadLangEvent(lang);


// =======================
// Définition des événements
// =======================
const eventsData = {
    1: {
        title: "Réactions de foule",
        medias: [
            { type: "img", src: "./medias/Soiree/1/img13.jpg" },
            { type: "img", src: "./medias/Soiree/1/img2.jpg" },
            { type: "img", src: "./medias/Soiree/1/img3.jpg" },
            { type: "img", src: "./medias/Soiree/1/img5.jpg" },
            { type: "img", src: "./medias/Soiree/1/imgx.jpg" },
            { type: "img", src: "./medias/Soiree/1/imgx2.jpg" },
            { type: "img", src: "./medias/Soiree/1/imgx3.jpg" },
            { type: "img", src: "./medias/Soiree/1/imgx4.jpg" },
            { type: "video", src: "./medias/Soiree/1/20250228_230430~4.mp4" },
            { type: "video", src: "./medias/Soiree/1/20250228_235313~4.mp4" },
            { type: "video", src: "./medias/Soiree/1/20250301_000710.mp4" },
            { type: "video", src: "./medias/Soiree/1/20250309_011103.mp4" },
            { type: "video", src: "./medias/Soiree/1/20250309_015730.mp4" },
            { type: "video", src: "./medias/Soiree/1/20250309_030135.mp4" },
            { type: "video", src: "./medias/Soiree/1/pov screemo 1.mp4" },
            { type: "img", src: "./medias/Soiree/1/Thumbnail 2.jpg" },
            { type: "img", src: "./medias/Soiree/1/Thumbnail 3.jpg" },
            { type: "img", src: "./medias/Soiree/1/Thumbnail.jpg" },
            { type: "video", src: "./medias/Soiree/1/vid.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid1.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid10.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid11.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid2.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid33.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid4.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid44.mp4" },
            { type: "img", src: "./medias/Soiree/1/img7.jpg" },
            { type: "img", src: "./medias/Soiree/1/img9.jpg" },
            { type: "video", src: "./medias/Soiree/1/vid44.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid5.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid55.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid6.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid66.mp4" },
            { type: "video", src: "./medias/Soiree/1/vid8.mp4" },
            { type: "video", src: "./medias/Soiree/1/vidx.mp4" }
        ]
    },
    2: {
        title: "Saison des bals 2025",
        medias: [
            { type: "img", src: "./medias/Soiree/2/img1.jpg" },
            { type: "img", src: "./medias/Soiree/2/img2.jpg"},
            { type: "img", src: "./medias/Soiree/2/img3.jpg"},
            { type: "img", src: "./medias/Soiree/2/img4.jpg"},
            { type: "img", src: "./medias/Soiree/2/img5.jpg"},
            { type: "img", src: "./medias/Soiree/2/img6.jpg"},
            { type: "img", src: "./medias/Soiree/2/img7.jpg"},
            { type: "img", src: "./medias/Soiree/2/img8.jpg"},
            { type: "img", src: "./medias/Soiree/2/Messenger_creation_949A66A7-E21B-4EBD-8476-0DA4E33F9AC7.jpg"},
            { type: "img", src: "./medias/Soiree/2/Thumbnail.jpg"}
        ]
    },
    3: {
        title: "Pangea",
        medias: [
            { type: "img", src: "./medias/Soiree/3/img1.jpg" },
            { type: "img", src: "./medias/Soiree/3/img10.jpg" },
            { type: "img", src: "./medias/Soiree/3/img11.jpg" },
            { type: "img", src: "./medias/Soiree/3/img12.jpg" },
            { type: "img", src: "./medias/Soiree/3/img13.jpg" },
            { type: "img", src: "./medias/Soiree/3/img14.jpg" },
            { type: "img", src: "./medias/Soiree/3/img15.jpg" },
            { type: "img", src: "./medias/Soiree/3/img2.jpg" },
            { type: "img", src: "./medias/Soiree/3/img3.jpg" },
            { type: "img", src: "./medias/Soiree/3/img4.jpg" },
            { type: "img", src: "./medias/Soiree/3/img5.jpg" },
            { type: "img", src: "./medias/Soiree/3/img6.jpg" },
            { type: "img", src: "./medias/Soiree/3/img7.jpg" },
            { type: "img", src: "./medias/Soiree/3/img8.jpg" },
            { type: "img", src: "./medias/Soiree/3/img9.jpg" },
            { type: "img", src: "./medias/Soiree/3/Thumbnail.jpg" },
            { type: "video", src: "./medias/Soiree/3/vid5.mp4" }
        ]
    },
    4: {
        title: "Poubelle Magnifique",
        medias: [
            { type: "img", src: "./medias/Soiree/4/img1.jpg" },
            { type: "img", src: "./medias/Soiree/4/img10.jpg" },
            { type: "img", src: "./medias/Soiree/4/img2.jpg" },
            { type: "img", src: "./medias/Soiree/4/img3.jpg" },
            { type: "img", src: "./medias/Soiree/4/img4.jpg" },
            { type: "img", src: "./medias/Soiree/4/img5.jpg" },
            { type: "img", src: "./medias/Soiree/4/img6.jpg" },
            { type: "img", src: "./medias/Soiree/4/img7.jpg" },
            { type: "img", src: "./medias/Soiree/4/img8.jpg" },
            { type: "img", src: "./medias/Soiree/4/img9.jpg" },
            { type: "img", src: "./medias/Soiree/4/Thumbnail.jpg" }
        ]
    },
    5: {
        title: "Ping Pong Club",
        medias: [
            { type: "img", src: "./medias/Soiree/5/img autre.jpg" },
            { type: "video", src: "./medias/Soiree/5/vid4.mp4" },
            { type: "img", src: "./medias/Soiree/5/img1.jpg" },
            { type: "img", src: "./medias/Soiree/5/img10.jpg" },
            { type: "video", src: "./medias/Soiree/5/vid7.mp4" },
            { type: "img", src: "./medias/Soiree/5/img2.jpg" },
            { type: "img", src: "./medias/Soiree/5/img3.jpg" },
            { type: "video", src: "./medias/Soiree/5/vid2.mp4" },
            { type: "img", src: "./medias/Soiree/5/img4.jpg" },
            { type: "img", src: "./medias/Soiree/5/img5.jpg" },
            { type: "img", src: "./medias/Soiree/5/img6.jpg" },
            { type: "img", src: "./medias/Soiree/5/img7.jpg" },
            { type: "img", src: "./medias/Soiree/5/img8.jpg" },
            { type: "img", src: "./medias/Soiree/5/img9.jpg" },
            { type: "img", src: "./medias/Soiree/5/Thumbnail.jpg" },
            { type: "video", src: "./medias/Soiree/5/vid9.mp4" }
        ]
    },
    6: {
        title: "Corporatif",
        medias: [
            { type: "video", src: "./medias/Soiree/6/20240629_221120.mp4" },
            { type: "img", src: "./medias/Soiree/6/img1.jpg" },
            { type: "img", src: "./medias/Soiree/6/img10.jpg" },
            { type: "video", src: "./medias/Soiree/6/20240803_230400.mp4" },
            { type: "img", src: "./medias/Soiree/6/img2.jpg" },
            { type: "img", src: "./medias/Soiree/6/img3.jpg" },
            { type: "video", src: "./medias/Soiree/6/20240803_230514.mp4" },
            { type: "img", src: "./medias/Soiree/6/img4.jpg" },
            { type: "img", src: "./medias/Soiree/6/img5.jpg" },
            { type: "video", src: "./medias/Soiree/6/20241214_175959.mp4" },
            { type: "img", src: "./medias/Soiree/6/img6.jpg" },
            { type: "img", src: "./medias/Soiree/6/img7.jpg" },
            { type: "img", src: "./medias/Soiree/6/img8.jpg" },
            { type: "img", src: "./medias/Soiree/6/img9.jpg" },
            { type: "video", src: "./medias/Soiree/6/vid3.mp4" },
            { type: "img", src: "./medias/Soiree/6/received_1006762207414167.jpg" },
            { type: "img", src: "./medias/Soiree/6/received_2997422420409226.jpg" },
            { type: "img", src: "./medias/Soiree/6/received_503516402051573.jpg" },
            { type: "img", src: "./medias/Soiree/6/received_806636704905336.jpg" },
            { type: "img", src: "./medias/Soiree/6/Thumbnail.jpg" }
        ]
    },
    7: {
        title: "Partenaires",
        medias: [
            { type: "img", src: "./medias/Soiree/7/abreuv.jpg" },
            { type: "img", src: "./medias/Soiree/7/ausgang.jpg" },
            { type: "img", src: "./medias/Soiree/7/baroque.jpg" },
            { type: "img", src: "./medias/Soiree/7/belmont.jpg" },
            { type: "img", src: "./medias/Soiree/7/blue dog.jpg" },
            { type: "img", src: "./medias/Soiree/7/burgundy lion.jpg" },
            { type: "img", src: "./medias/Soiree/7/caché.jpg" },
            { type: "img", src: "./medias/Soiree/7/cafe campus.jpg" },
            { type: "img", src: "./medias/Soiree/7/cave.jpg" },
            { type: "img", src: "./medias/Soiree/7/faecum.jpg" },
            { type: "img", src: "./medias/Soiree/7/l'idéal.jpg" },
            { type: "img", src: "./medias/Soiree/7/mckibbins.jpg" },
            { type: "img", src: "./medias/Soiree/7/megafun.jpg" },
            { type: "img", src: "./medias/Soiree/7/nacho.jpg" },
            { type: "img", src: "./medias/Soiree/7/newspeak.jpg" },
            { type: "img", src: "./medias/Soiree/7/palazo.jpg" },
            { type: "img", src: "./medias/Soiree/7/peopl.jpg" },
            { type: "img", src: "./medias/Soiree/7/ping pong.jpg" },
            { type: "img", src: "./medias/Soiree/7/SAT.jpg" },
            { type: "img", src: "./medias/Soiree/7/shaker.jpg" },
            { type: "img", src: "./medias/Soiree/7/technomage.jpg" },
            { type: "img", src: "./medias/Soiree/7/Thumbnail.jpg" },
            { type: "img", src: "./medias/Soiree/7/timeout.jpg" },
            { type: "img", src: "./medias/Soiree/7/vieux-port.jpg" },
            { type: "img", src: "./medias/Soiree/7/winnies.jpg" }
        ]
    },
        8: {
        title: "Flying Too Close to the Sun",
        medias: [
            { type: "img", src: "./medias/Soiree/8/Thumbnail.jpg" },
            { type: "img", src: "./medias/Soiree/8/img1.jpg" },
            { type: "img", src: "./medias/Soiree/8/img2.jpg" },
            { type: "img", src: "./medias/Soiree/8/img3.jpg" },
            { type: "img", src: "./medias/Soiree/8/img4.jpg" },
            { type: "img", src: "./medias/Soiree/8/img5.jpg" },
            { type: "img", src: "./medias/Soiree/8/img6.jpg" },
            { type: "img", src: "./medias/Soiree/8/img7.jpg" },
            { type: "img", src: "./medias/Soiree/8/img8.jpg" },
            { type: "img", src: "./medias/Soiree/8/img9.jpg" },
            { type: "img", src: "./medias/Soiree/8/img10.jpg" },
            { type: "img", src: "./medias/Soiree/8/img11.jpg" },
            { type: "img", src: "./medias/Soiree/8/img12.jpg" }
        ]
    
};

// =======================
// Fonction pour charger un event
// =======================
function loadEvent(eventId) {
    const event = eventsData[eventId];
    if (!event) return;

    // titre
    const titleEl = document.getElementById("eventTitle");
    if (titleEl) titleEl.textContent = event.title;

    // Background hero
    const hero = document.getElementById("soiree-hero");
    if (hero) {
        hero.style.backgroundImage = `url("./medias/Soiree/${eventId}/Thumbnail.jpg")`;
    }

    // galerie
    const gallery = document.getElementById("eventGallery");
    if (!gallery) return;
    gallery.innerHTML = "";

    event.medias.forEach((m) => {
        if (m.type === "img") {
            const img = document.createElement("img");
            img.src = m.src;           // ok lazy loading pour img
            img.alt = "Photo de l'événement";
            img.loading = "lazy";
            gallery.appendChild(img);
        } else if (m.type === "video") {
            const vid = document.createElement("video");
            vid.controls = true;
            vid.preload = "none";       // empêche le navigateur de tout télécharger
            const source = document.createElement("source");
            source.dataset.src = m.src; // utilise data-src au lieu de src
            source.type = "video/mp4";
            vid.appendChild(source);
            gallery.appendChild(vid);
        }
    });
    const loadVideo = (entry) => {
        const vid = entry.target;
        const src = vid.querySelector("source").dataset.src;
        if (src) {
            vid.querySelector("source").src = src;
            vid.load(); // charge la vidéo
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadVideo(entry);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    document.querySelectorAll(".soiree-gallery video").forEach(v => observer.observe(v));
    }

// =======================
// Initialisation page event
// =======================
const params = new URLSearchParams(window.location.search);
const eventId = params.get("event") || 1;

loadEvent(eventId);
