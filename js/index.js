const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Initialisation du compteur
let compteur = 0;

// BULLET

// Selection de la div qui a la classe dots
const divDots = document.querySelector(".dots");

// Creation du nombre de div.dot par rapoort au nombre d'images
slides.map((images) => {
  const htmlDots = document.createElement("div");
  htmlDots.classList.add("dot");
  divDots.appendChild(htmlDots);
});

// Selection de toutes les div avec la classe dot

const dots = document.querySelectorAll(".dot");
dots[compteur].classList.add("dot_selected")

//Selection des div fleches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
// Selection de la div image
const image = document.querySelector(".banner-img");



// Creation de l event listener
arrowLeft.addEventListener("click", () => {
  // si le compteur est a 0 on revient a la fin du tableau
  if (compteur === 0) {
    compteur = slides.length - 1;
	dots[0].classList.remove("dot_selected")
	dots[compteur].classList.add("dot_selected")
  } else {
    // sinon on decremente
    compteur--;
	dots[compteur + 1].classList.remove("dot_selected")
	dots[compteur].classList.add("dot_selected")
  }

  // on ajouteur la source de l'objet selectionner dans le tableau a la div image
  image.src = `images/${slides[compteur].image}`;
  // on ajouteur le text de l'objet selectionner dans le tableau a la div qui a la balise p qui a l'id tagline
  tagline.innerHTML = slides[compteur].tagLine;
});

// Creation de l event listener
arrowRight.addEventListener("click", (e) => {
  // si le compteur est egale a la longueur du tableau
  if (compteur === slides.length - 1) {
    // on revient a zero
    compteur = 0;
	dots[slides.length - 1].classList.remove("dot_selected")
	dots[compteur].classList.add("dot_selected")
  } else {
    // sinon on incremente
    compteur++;
	dots[compteur].classList.add("dot_selected")
	dots[compteur - 1].classList.remove("dot_selected")
  }

  
  // on ajouteur la source de l'objet selectionner dans le tableau a la div image
  image.src = `images/${slides[compteur].image}`;
  // on ajouteur le text de l'objet selectionner dans le tableau a la div qui a la balise p qui a l'id tagline
  tagline.innerHTML = slides[compteur].tagLine;
});


