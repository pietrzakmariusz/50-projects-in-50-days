const buttons = document.querySelectorAll('.faq__buttons');

buttons.forEach(button =>
	button.addEventListener('click', () => {
		button.parentNode.classList.toggle('faq__item--active');
	})
);
