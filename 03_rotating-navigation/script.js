const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => {
	container.classList.add('container--show-nav');
});

close.addEventListener('click', () => {
	container.classList.remove('container--show-nav');
});
