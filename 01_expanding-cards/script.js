const panels = document.querySelectorAll('.panel'); // Nodelist

const removeActiveClass = () => {
	for (const panel of panels) {
		panel.classList.remove('active');
	}
};

const panelClickHandler = event => {
	// usunięcie klasy .active ze wszystkich paneli
	removeActiveClass();
	event.target.classList.add('active');
};

panels.forEach(panel => {
	panel.addEventListener('click', panelClickHandler);
});
