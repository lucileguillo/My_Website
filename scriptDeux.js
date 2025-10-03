let photographie = [
  {
    image: "photographieBox/festivalinterceltiquedeux.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/festivalinterceltiqueun.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF5743.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF5614.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF5547.webp",
    taille: "petit",
  },
    {
    image: "photographieBox/bretagneclassic.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/bretagneclassicdeux.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/bretagneclassictrois.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF0713-2.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF0721-2-2.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF0709.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/Montagne.webp",
    taille: "grand",
  },
  {
    image: "photographieBox/belleile.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/belleiledeux.webp",
    taille: "grand",
  },
  {
    image: "photographieBox/12102024_street_photography_1.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/12102024_street_photography_15.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/bourse7.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/bourse15.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/photographyclass.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/photographyclasstwo.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/photographyclassthree.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/paris2024_6.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/paris2024_12.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/quiberon40.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/quiberon43.webp",
    taille: "petit",
  },
  {
    image: "photographieBox/toureiffel3.webp",
    taille: "petit",
  },
];

function creerCarteDeux(photographie) {
  let contenuDeux = `
    <div class="imagesBox">
      <img class="images ${photographie.taille}" src="${photographie.image}" alt="ImagePhotographie">
    </div>
  `;
  let carteDeux = document.createElement("div");
  carteDeux.innerHTML = contenuDeux;
  carteDeux.classList.add("carte");
  return carteDeux;
}

// Boucle pour afficher les cartes
for (let i = 0; i < photographie.length; i++) {
  let carteDeux = creerCarteDeux(photographie[i]);
  document.querySelector("#imageDeux-container").appendChild(carteDeux);
}


document.addEventListener("DOMContentLoaded", changerVue);
