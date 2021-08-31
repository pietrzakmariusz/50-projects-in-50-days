const body = document.body;
const slides = document.querySelectorAll('.slider__slide');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let activeSlide = 0;

function setBackgroundBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach(slide => slide.classList.remove('slider__slide--active'));
	slides[activeSlide].classList.add('slider__slide--active');
}

function changeActiveSlide(step) {
	if (step === '+') {
		activeSlide >= slides.length - 1 ? (activeSlide = 0) : activeSlide++;
	} else if (step === '-') {
		activeSlide <= 0 ? (activeSlide = slides.length - 1) : activeSlide--;
	}
}

btnRight.addEventListener('click', () => {
	changeActiveSlide('+');
	setBackgroundBody();
	setActiveSlide();
});

btnLeft.addEventListener('click', () => {
	changeActiveSlide('-');
	setBackgroundBody();
	setActiveSlide();
});

window.addEventListener('keydown', event => {
	if (event.code === 'ArrowRight') {
		changeActiveSlide('+');
		setBackgroundBody();
		setActiveSlide();
	}
	if (event.code === 'ArrowLeft') {
		changeActiveSlide('-');
		setBackgroundBody();
		setActiveSlide();
	}
});

setBackgroundBody();
