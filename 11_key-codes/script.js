const codes = document.querySelectorAll('.code');

window.addEventListener('keydown', event => {
	codes[0].textContent = `${event.key === ' ' ? 'spacja' : event.key}`;
	codes[1].textContent = event.keyCode;
	codes[2].textContent = event.code;
});
