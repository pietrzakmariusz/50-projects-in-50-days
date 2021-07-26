const tagsArea = document.getElementById('tags');
const inputArea = document.getElementById('inputArea');

inputArea.focus();

inputArea.addEventListener('keyup', e => {
	createTags(e.target.value);

	if (e.key === 'Enter' && tagsArea.childElementCount > 1) {
		setTimeout(() => {
			e.target.value = '';
			inputArea.disabled = true;
		}, 10);
		randomSelect();
	}
});

function createTags(input) {
	const tags = input
		.split(',')
		.filter(tag => tag.trim() !== '')
		.map(tag => tag.trim());

	tagsArea.innerHTML = '';

	tags.forEach(tag => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsArea.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 20;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		highlightTag(randomTag);

		setTimeout(() => {
			highlightTag(randomTag, false);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomTag = pickRandomTag();

			highlightTag(randomTag);

			inputArea.disabled = false;
		}, 100);
	}, times * 100);
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag, show = true) {
	if (show) {
		tag.classList.add('tag--highlight');
	} else {
		tag.classList.remove('tag--highlight');
	}
}
