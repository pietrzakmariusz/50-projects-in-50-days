const sounds = document.querySelectorAll('audio');
const buttons = document.getElementById('buttons');

sounds.forEach(sound => {
	const nameSound = sound.dataset.name;
	const btn = document.createElement('button');
	btn.classList.add('btn');

	btn.innerText = nameSound;
	buttons.appendChild(btn);

	btn.addEventListener('click', () => {
		stopSongs();
		document.querySelector(`[data-name=${nameSound}]`).play();
	});
});

function stopSongs() {
	sounds.forEach(sound => {
		const nameSound = sound.dataset.name;
		const songElement = document.querySelector(`[data-name=${nameSound}]`);

		songElement.pause();
		songElement.currentTime = 0;
	});
}
