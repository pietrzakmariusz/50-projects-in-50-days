const API_KEY = '0e4cbeb6363cfe7e456fcddb447be7b0';
const API_URL_PREFIX = 'https://api.themoviedb.org/3';
const API_URL = `${API_URL_PREFIX}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1&language=pl`;
const SEARCH_API = `${API_URL_PREFIX}/search/movie?api_key=${API_KEY}&query=`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const mainEl = document.getElementById('main');
const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
}

function showMovies(movies) {
	mainEl.innerHTML = '';

	movies.forEach(movie => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');

		movieEl.innerHTML = `
			<img class="movie__img" src="${IMG_PATH + poster_path}" alt="${title}">

			<div class="movie__header">
				<h3 class="movie__title">${title}</h3>
				<span class="movie__rating movie__rating--${getClassByRate(
					vote_average
				)}">${vote_average}</span>
			</div>
			
			<div class="movie__info">
				<h3 class="movie__title movie__info-title">Opis</h3>
				<p class="movie__description">${overview}</p>
			</div>`;

		mainEl.appendChild(movieEl);
	});
}

async function getMovies(url) {
	const response = await fetch(url);
	const data = await response.json();

	showMovies(data.results);
}

formEl.addEventListener('submit', event => {
	event.preventDefault();

	const search = searchEl.value;

	if (search && search !== '') {
		getMovies(SEARCH_API + `"${search}"`);

		searchEl.value = '';
	} else {
		window.location.reload();
	}
});

getMovies(API_URL);
