let photographie = [
  {
    image: "photographieBox/festivalinterceltiquedeux.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/festivalinterceltiqueun.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF5743.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF5614.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF5547.jpg",
    taille: "petit",
  },
    {
    image: "photographieBox/bretagneclassic.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/bretagneclassicdeux.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/bretagneclassictrois.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF0713-2.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF0721-2-2.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/DSCF0709.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/Montagne.jpg",
    taille: "grand",
  },
  {
    image: "photographieBox/belleile.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/belleiledeux.jpg",
    taille: "grand",
  },
  {
    image: "photographieBox/12102024_street_photography_1.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/12102024_street_photography_15.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/bourse7.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/bourse15.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/photographyclass.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/photographyclasstwo.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/photographyclassthree.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/paris2024_6.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/paris2024_12.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/quiberon40.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/quiberon43.jpg",
    taille: "petit",
  },
  {
    image: "photographieBox/toureiffel3.jpg",
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
