 const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;

const banner = document.querySelector(".banner-img");
// banner.src = "./assets/images/slideshow/" + slides[currentIndex].image;

const description = document.querySelector(".banner-text");
// description.innerHTML = slides[currentIndex].tagLine;

const arrowLeft = document.querySelector(".arrow_left");

const arrowRight = document.querySelector(".arrow_right");

const nbSlides = slides.length;

const dots = document.querySelector(".dots");

arrowLeft.addEventListener("click", function () {
	// currentIndex--;
	// if (currentIndex < 0) {
	// 	currentIndex = nbSlides-1;
	// }
	currentIndex=--currentIndex<0 ? nbSlides-1 : currentIndex;
	showSlide();
});

arrowRight.addEventListener("click", function () {
	// currentIndex++;
	// if (currentIndex > nbSlides-1) {
	// 	currentIndex = 0;
	// }
	currentIndex=++currentIndex % nbSlides;
	showSlide();
});

for (let i = 0; i < nbSlides; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === currentIndex) {
		dot.classList.add("dot_selected");
	}
	dots.appendChild(dot);
}

function updateSelectedDot() {
    const dotElements = dots.querySelectorAll(".dot");
    dotElements.forEach(dot => {
        dot.classList.remove("dot_selected");
    });
    dotElements[currentIndex].classList.add("dot_selected");
}

function showSlide () {
	banner.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	description.innerHTML = slides[currentIndex].tagLine;
	updateSelectedDot();
}