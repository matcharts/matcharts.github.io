// =======================
// TEXTES MULTI-LANGUES
// =======================
const textData = {
  fr: {
    nav: ["Accueil", "À propos", "Événements", "Contact"],
    title: "Merci pour votre message !",
    text: "Nous avons bien reçu vos informations et vous contacterons bientôt.",
    back: "Retour à l'accueil",
    index: "index.html",
    contact: "contact.html?lang=fr",
    switch: "EN"
  },
  en: {
    nav: ["Home", "About", "Events", "Contact"],
    title: "Thank you for your message!",
    text: "We have received your information and will contact you shortly.",
    back: "Back to Home Page",
    index: "indexENG.html",
    contact: "contact.html?lang=en",
    switch: "FR"
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
document.getElementById("linkContact").href = data.contact;

// CONFIRMATION
document.getElementById("confirmTitle").textContent = data.title;
document.getElementById("confirmText").textContent = data.text;

const backBtn = document.getElementById("backHome");
backBtn.textContent = data.back;
backBtn.href = data.index;

// SWITCH LANG
const btn = document.getElementById("switchLang");
btn.textContent = data.switch;
btn.onclick = () => {
  const newLang = lang === "fr" ? "en" : "fr";
  window.location.search = `?lang=${newLang}`;
};