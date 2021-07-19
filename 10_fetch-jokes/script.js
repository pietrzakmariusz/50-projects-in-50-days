const jokeTxt = document.getElementById('jokeTxt');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};
	const res = await fetch('https://icanhazdadjoke.com', config);
	const data = await res.json();

	jokeTxt.innerHTML = data.joke;
}
