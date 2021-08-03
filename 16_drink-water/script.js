const smallCups = document.querySelectorAll('.cup__small');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');

updateBigCup();

smallCups.forEach((cup, index) => {
	cup.addEventListener('click', () => {
		highlightCup(index);
	});
});

function highlightCup(selectedCup) {
	if (
		selectedCup === smallCups.length - 1 &&
		smallCups[selectedCup].classList.contains('cup__small--full')
	) {
		selectedCup--;
	} else if (
		smallCups[selectedCup].classList.contains('cup__small-full') &&
		!smallCups[selectedCup].nextElementSibling.classList.constains(
			'cup__small--full'
		)
	) {
		selectedCup--;
	}

	smallCups.forEach((cup, currentCup) => {
		if (currentCup <= selectedCup) {
			cup.classList.add('cup__small--full');
		} else {
			cup.classList.remove('cup__small--full');
		}
	});

	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup__small--full').length;
	const totalCups = smallCups.length;

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 35}rem`;
		percentage.textContent = `${Math.round((fullCups / totalCups) * 100)}%`;
	}

	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.textContent = `${3 - (250 * fullCups) / 1000} l`;
		// remained.style.height = 0;
	}
}
