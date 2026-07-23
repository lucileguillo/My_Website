let intro = [
    {
        image:"photographieBox/TourFrance26 (8).jpg",
    },
    {
        image:"photographieBox/WLG25-05.06_CharlotteCardin_lulurevee (15).jpg",
    },
    {
        image:"photographieBox/WLG25-05.06_RoleModel_lulurevee (7).jpg",
    },
    {
        image:"photographieBox/TourFrance26 (7).jpg",
    },
    {
        image:"photographieBox/WLG25-05.06_MaxBaby_lulurevee (9).jpg",
    },
    
    {
        image:"photographieBox/TourFrance26 (4).jpg",
    },
    
    {
        image:"photographieBox/WLG25-05.06_CharlotteCardin_lulurevee (12).jpg",
    },
    {
        image:"photographieBox/RolandGarros26 (4).jpg",
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
        image:"photographieBox/bretagneclassiccinq.webp",
    },
    {
        image:"photographieBox/DSCF5743.webp",
    },
]

/* Intro section */

function creerIntro(intro) {
    let contenuIntro = `
        <img class="intro-images" src="${intro.image}" alt="ImagePhotographie">
    `;
    let photoIntro = document.createElement("div");
    photoIntro.classList.add("intro-grid");
    photoIntro.innerHTML = contenuIntro;
    return photoIntro;
}


for (let i = 0; i < intro.length; i++) {
    let photoIntro = creerIntro(intro[i]);
    document.querySelector("#photography-intro").appendChild(photoIntro);
}

/*Intro Mobile */

function creerIntro(introSmall) {
    let contenuIntroSmall = `
        <img class="intro-images" src="${introSmall.image}" alt="ImagePhotographie">
    `;
    let photoIntroSmall = document.createElement("div");
    photoIntroSmall.classList.add("intro-grid");
    photoIntroSmall.innerHTML = contenuIntroSmall;
    return photoIntroSmall;
}

for (let i = 0; i < introSmall.length; i++) {
    let photoIntroSmall = creerIntro(introSmall[i]);
    document.querySelector("#photography-intro-large").appendChild(photoIntroSmall);
}

/* Film section parallax */
gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", function () {     
    const parallax = [
        {class: "parallax-film-first", endTranslateY: -2000, rotate: 5},
        {class: "parallax-film-second", endTranslateY: -1000, rotate: 5},
        {class: "parallax-film-img3", endTranslateY: -5000, rotate: 5},
        {class: "parallax-film-img4", endTranslateY: -7000, rotate: 5},
        {class: "parallax-film-img5", endTranslateY: -1000, rotate: 5},
        {class: "parallax-film-img6", endTranslateY: -2000, rotate: 5},
    ];
    
    ScrollTrigger.create({
        trigger: ".parallax-film-first",
        start: "top +=100vh",
        end: "+=700vh",
        scrub: 1,
        onUpdate: (self) => {
            gsap.to(".parallax-film-first", {
                y: `${-50 * self.progress}vh`, 
                duration: 1,
                ease: "power3.out",
            })
        }
    })

    ScrollTrigger.create({
        trigger: ".parallax-film-second",
        start: "top +=300vh",
        end: "+=700vh",
        scrub: 1,
        onUpdate: (self) => {
            gsap.to(".parallax-film-second", {
                y: `${-50 * self.progress}vh`, 
                duration: 1,
                ease: "power3.out",
            })
        }
    })
});


/* Section Carrousel */
let carrousel = [
    { image:"photographieBox/TourFrance26 (7).jpg" },
    { image:"photographieBox/TourFrance26 (8).jpg" },
    { image:"photographieBox/TourFrance26 (6).jpg" },
    { image:"photographieBox/TourFrance26 (5).jpg" },
    { image:"photographieBox/TourFrance26 (1).jpg" },
    { image:"photographieBox/TourFrance26 (2).jpg" },
    { image:"photographieBox/TourFrance26 (3).jpg" },
    { image:"photographieBox/TourFrance26 (4).jpg" },
    { image: "photographieBox/bretagneclassicquatre.webp" },
    { image: "photographieBox/bretagneclassictrois.webp" },
    { image: "photographieBox/bretagneclassicdeux.webp" },
    { image: "photographieBox/bretagneclassicsix.webp" },
    { image: "photographieBox/bretagneclassicsept.webp" },
    { image: "photographieBox/bretagneclassichuit.webp" },
    { image: "photographieBox/bretagneclassicneuf.webp" },
    { image: "photographieBox/bretagneclassicdix.webp" },
    { image: "photographieBox/bretagneclassiccinq.webp" },
    { image: "photographieBox/bretagneclassic.webp" },
];

const track = document.querySelector(".track");
const total = carrousel.length;
const slideWidth = 300;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let extended = [...carrousel, ...carrousel, ...carrousel];


extended.forEach(item => {
    const div = document.createElement("div");
    div.className = "carrousel-container";
    div.innerHTML = `
    <div class="inner">
        <img class="carrousel-images" src="${item.image}" />
    </div>
`;

    track.appendChild(div);
});

const slides = document.querySelectorAll(".carrousel-container");

let indexActuel = total;  

function updatePosition(skipTransition = false) {

    if (skipTransition) {
        track.style.transition = "none";
        track.classList.add("no-zoom-transition");
    }
    else {
        track.style.transition = "transform 0.4s ease";
        track.classList.remove("no-zoom-transition");
    }

    const offset = -(indexActuel * slideWidth) + (window.innerWidth/2 - 150);
    track.style.transform = `translateX(${offset}px)`;

    slides.forEach((s, i) => {
        s.classList.toggle("active", i === indexActuel);
    });
}

track.addEventListener("transitionend", () => {

    if (indexActuel < total) {
        indexActuel += total;

        track.classList.add("no-transition");

        requestAnimationFrame(() => {
            updatePosition(true);

            requestAnimationFrame(() => {
                track.classList.remove("no-transition");
            });
        });
    }

    if (indexActuel >= total * 2) {
        indexActuel -= total;

        track.classList.add("no-transition");

        requestAnimationFrame(() => {
            updatePosition(true);

            requestAnimationFrame(() => {
                track.classList.remove("no-transition");
            });
        });
    }
});

slides.forEach((slide, i) => {
    slide.onclick = () => {
        indexActuel = i;
        updatePosition();
    };

    
});

prev.addEventListener("click", () => {
    indexActuel--;
    updatePosition();
});

next.addEventListener("click", () => {
    indexActuel++;
    updatePosition();
});

updatePosition(true);

//concert carrousel 
let concert = [
    { image:"photographieBox/WLG25-05.06_CharlotteCardin_lulurevee (12).jpg" },
    { image:"photographieBox/WLG25-05.06_CharlotteCardin_lulurevee (15).jpg" },
    { image:"photographieBox/WLG25-05.06_MaxBaby_lulurevee (5).jpg" },
    { image:"photographieBox/WLG25-05.06_MaxBaby_lulurevee (6).jpg" },
    { image:"photographieBox/WLG25-05.06_CharlotteCardin_lulurevee (59).jpg" },
    { image:"photographieBox/WLG25-05.06_RoleModel_lulurevee (7).jpg" },
    { image:"photographieBox/WLG25-05.06_SudanArchives_lulurevee (3).jpg" },
    { image:"photographieBox/WLG25-05.06_MaxBaby_lulurevee (9).jpg" },
    { image: "photographieBox/WLG25-05.06_CharlotteCardin_lulurevee (8).jpg" },
    { image: "photographieBox/WLG25-05.06_RoleModel_lulurevee (12).jpg" },
    { image: "photographieBox/WLG25-05.06_Aupinard_lulurevee (15).jpg" },
    { image: "photographieBox/WLG25-05.06_SudanArchives_lulurevee.jpg" },
];

function creerPaysage(concert) {
    let contenuPaysage = `
        <img class="paysage-img" src="${concert.image}" alt="ImagePhotographie">
    `;
    let paysagePhoto = document.createElement("div");
    paysagePhoto.classList.add("paysage-grid");
    paysagePhoto.innerHTML = contenuPaysage;
    return paysagePhoto;
}   
for (let i = 0; i < concert.length; i++) {
    let paysagePhoto = creerPaysage(concert[i]);
    document.querySelector("#paysage-container").appendChild(paysagePhoto);
}
