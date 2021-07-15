const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
	const triggerBottom = window.innerHeight * 0.8;

	boxes.forEach(box => {
		const boxTop = box.getBoundingClientRect().top;

		if (boxTop < triggerBottom) {
			box.classList.add('box--show');
		} else if (
			document.documentElement.scrollHeight ==
			window.innerHeight + window.scrollY
		) {
			box.classList.add('show');
		} else {
			box.classList.remove('box--show');
		}
	});
}

checkBoxes();
