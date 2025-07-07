//photographie

let photographie = [
  {
    image: "photographieBox/DSCF0713-2.jpg",
  },
  {
    image: "photographieBox/DSCF0721-2-2.jpg",
  },
  {
    image: "photographieBox/DSCF0709.jpg",
  },
  {
    image: "photographieBox/25.01.2025.5.jpg",
  },
  {
    image: "photographieBox/12102024_street_photography_1.jpg",
  },
  {
    image: "photographieBox/12102024_street_photography_5_bw.jpg",
  },
  {
    image: "photographieBox/12102024_street_photography_15.jpg",
  },
  {
    image: "photographieBox/bourse7.jpg",
  },
  {
    image: "photographieBox/bourse15.jpg",
  },
  {
    image: "photographieBox/photographyclass.jpg",
  },
  {
    image: "photographieBox/photographyclasstwo.jpg",
  },
  {
    image: "photographieBox/photographyclassthree.jpg",
  },
  {
    image: "photographieBox/paris2024_6.jpg",
  },
  {
    image: "photographieBox/paris2024_12.jpg",
  },
  {
    image: "photographieBox/paris2024_45.jpg",
  },
  {
    image: "photographieBox/quiberon40.jpg",
  },
  {
    image: "photographieBox/quiberon43.jpg",
  },
  {
    image: "photographieBox/toureiffel3.jpg",
  },
  
];

function creerCarteDeux(photographie) {
  let contenuDeux = `
    <div class="imagesBox">
        <img class="images" src="${photographie.image}" alt="ImagePhotographie">
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