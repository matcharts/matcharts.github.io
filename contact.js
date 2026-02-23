// =======================
// TEXTES MULTI-LANGUES
// =======================
const textData = {
  fr: {
    nav: ["Accueil", "À propos", "Événements", "Contact"],
    title: "Contact",
    labels: {
      name: "Nom *",
      email: "Adresse e-mail *",
      phone: "Numéro de téléphone *",
      date: "Date de l'événement *",
      time: "Heure de l'événement *",
      message: "Message *"
    },
    submit: "Envoyer",
    switch: "EN",
    index: "index.html",
    next: "./confirmeMail.html"
  },
  en: {
    nav: ["Home", "About", "Events", "Contact"],
    title: "Contact",
    labels: {
      name: "Name *",
      email: "E-mail *",
      phone: "Phone number *",
      date: "Event date *",
      time: "Event time *",
      message: "Message *"
    },
    submit: "Send",
    switch: "FR",
    index: "index.html",
    next: "./confirmeMail.html"
  }
};

// =======================
// LANGUE
// =======================
const params = new URLSearchParams(window.location.search);
let lang = params.get("lang") || "fr";
const data = textData[lang];

// NAV
document.getElementById("logoLink").href = data.index;
document.getElementById("linkHome").textContent = data.nav[0];
document.getElementById("linkHome").href = data.index;

document.getElementById("linkAbout").textContent = data.nav[1];
document.getElementById("linkAbout").href = `${data.index}#descendAbout`;

document.getElementById("linkEvent").textContent = data.nav[2];
document.getElementById("linkEvent").href = `${data.index}#descendEvent`;

document.getElementById("linkContact").textContent = data.nav[3];
document.getElementById("linkContact").href = `contact.html?lang=${lang}`;

// TITRE
document.getElementById("contactTitle").textContent = data.title;

// FORM
document.getElementById("labelName").textContent = data.labels.name;
document.getElementById("labelEmail").textContent = data.labels.email;
document.getElementById("labelPhone").textContent = data.labels.phone;
document.getElementById("labelDate").textContent = data.labels.date;
document.getElementById("labelTime").textContent = data.labels.time;
document.getElementById("labelMessage").textContent = data.labels.message;
document.getElementById("submitBtn").textContent = data.submit;

document.getElementById("nextPage").value = data.next;

// SWITCH LANG
const btn = document.getElementById("switchLang");
btn.textContent = data.switch;
btn.onclick = () => {
  const newLang = lang === "fr" ? "en" : "fr";
  window.location.search = `?lang=${newLang}`;
};