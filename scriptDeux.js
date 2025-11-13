
let intro = [
  {
    image:"photographieBox/DSCF5547.webp",
  },
  {
    image:"photographieBox/dounia-photoshoot_3.webp",
  },
  {
    image:"photographieBox/anaelle-photoshoot_1.webp",
  },
  {
    image:"photographieBox/photoshoot-nolhan-flowers.webp",
  },
  {
    image:"photographieBox/montagne2.webp",
  },
  {
    image:"photographieBox/photoshoot-anaelle-ball.webp",
  },
  {
    image:"photographieBox/DSCF0721-2-2.webp",
  },
  {
    image:"photographieBox/DSCF5743.webp",
  },
]

let introSmall = [
  {
    image:"photographieBox/dounia-photoshoot_3.webp",
  },
  {
    image:"photographieBox/anaelle-photoshoot_1.webp",
  },
  {
    image:"photographieBox/DSCF0721-2-2.webp",
  },
  {
    image:"photographieBox/DSCF5743.webp",
  },
]

function creerIntro(intro) {
  let contenuIntro = `
      <img class="intro-images" src="${intro.image}" alt="ImagePhotographie">
  `;
  let photoIntro = document.createElement("div");
  photoIntro.classList.add("intro-grid");
  photoIntro.innerHTML = contenuIntro;
  return photoIntro;
}

// Boucle pour afficher les cartes
for (let i = 0; i < intro.length; i++) {
  let photoIntro = creerIntro(intro[i]);
  document.querySelector("#photography-intro").appendChild(photoIntro);
}

function creerIntro(introSmall) {
  let contenuIntroSmall = `
      <img class="intro-images" src="${introSmall.image}" alt="ImagePhotographie">
  `;
  let photoIntroSmall = document.createElement("div");
  photoIntroSmall.classList.add("intro-grid");
  photoIntroSmall.innerHTML = contenuIntroSmall;
  return photoIntroSmall;
}

// Boucle pour afficher les cartes
for (let i = 0; i < introSmall.length; i++) {
  let photoIntroSmall = creerIntro(introSmall[i]);
  document.querySelector("#photography-intro-large").appendChild(photoIntroSmall);
}

