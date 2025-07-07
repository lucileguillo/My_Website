let graphisme = [
    {
        image : "graphismeBox/flyer planche 11.jpg",
        nom : "Grandiose - Grandis et Ose",
        texte : "Comment la musique peut-elle aider les jeunes à renforcer leur confiance en eux ? Avec Ellynn Briquet, nous avons exploré cette question à travers un projet mêlant playlists digitales et objet de collection. Deux playlists, deux perspectives : le regard de soi et l’impact de la société. Chaque morceau a été soigneusement sélectionné pour inspirer, motiver et encourager à être soi-même, sans peur du jugement.Pour aller plus loin, nous avons conçu un livret et des pochettes uniques, alliant dessins et photographies, à l’image d’un journal intime musical. Un projet artistique et humain qui nous a permis d’explorer de nouvelles compétences et de sortir de nos zones de confort.",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/magazine breq.jpg",
        nom : "Bréquigny Sublimé",
        texte : "Réalisation de photographies en noir et blanc prises dans l’enceinte du lycée. De plus, j’ai travaillé la mise en page à travers ce projet. Applications utilisées : Photoshop, Indesign",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/appli mobile.jpg",
        nom : "Application de voyage",
        texte : "Ce projet consistait à créer une application mobile sur le thème du voyage. Application utilisée : Adobe XD",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/astronautique mockup.jpg",
        nom : "Affiche",
        texte : "Réalisation d'une affiche  à l'éffigie du 74ème Congrès Internationnal d'Astronautique sur InDesign.",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/card.jpg",
        nom : "Bing Bang Circus",
        texte : "Ce logotype est destiné à l’identité graphique de l’association de cirque nommée Bing Bang Circus. J’ai réalisé le logotype ainsi qu’une carte d’adhésion. De plus, j’ai procédé à la création d’une charte graphique à l’effigie du cirque. Application utilisée : Illustrator.",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/book.jpg",
        nom : "Couverture de livre",
        texte : "Couvertures réalisées pour le livre intitulé Les désastreuses aventures des orphelins Baudelaire écrit par Lemony Snicket en 1999. Application utilisée : Illustrator",
        imageDeux : "graphismeBox/mockup livre 2.jpg"
    },
    {
        image : "graphismeBox/lino jpeg ver.jpg",
        nom : "Linogravure",
        texte : "Travail d’estampes en linogravure sur le thème de la forêt. Création de motifs distincts, superposés lors de l’impression. Réalisé sur format A5.",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/Lucile_Collage.jpg",
        nom : "Collage",
        texte : "",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    }
]

function creerCarte(graphisme){
    let projetTemplate = `
        <div class="principal">
            <div class="project-item" href="">
                <div class"projet-item-main">
                    <img src="${graphisme.image}" 
                    alt="${graphisme.nom}" id="pictureOne"/>
                </div>
                <div class="project-item-footer"
                    <h1 class="projetNom">${graphisme.nom}</h1><p class="informationTexte">${graphisme.texte}</p>
                </div>
            </div>
        </div>

    `;

    let projetGraphisme = document.createElement("div");
    projetGraphisme.innerHTML = projetTemplate;


    return projetGraphisme;
}



for (let i = 0; i < graphisme.length; i++) {
    let projet = creerCarte(graphisme[i]);
    document.querySelector("main").appendChild(projet);
}

