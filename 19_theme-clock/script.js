const hourEl = document.querySelector('.needle__hour');
const minuteEl = document.querySelector('.needle__minute');
const secondEl = document.querySelector('.needle__second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleBtn = document.querySelector('.toggle-theme-btn');

// set default dark mode, based on the browser's preferences
if (
	window.matchMedia('(prefers-color-scheme)').media !== 'not all' &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	document.documentElement.classList.add('dark');
	if (document.documentElement.classList.contains('dark')) {
		toggle.innerText = 'Motyw jasny';
	} else {
		toggle.innerText = 'Motyw ciemny';
	}
}

toggleBtn.addEventListener('click', e => {
	const html = document.querySelector('html');

	html.classList.toggle('html--dark');

	toggle.textContent = html.classList.contains('html--dark')
		? 'Motyw jasny'
		: 'Motyw ciemny';
});

function setTime() {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const time = new Date();
	const localDate = time.toLocaleDateString('pl-PL', options);

	const hours = time.getHours();
	const hoursForClock = hours >= 13 ? hours % 12 : hours;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		12,
		0,
		360
	)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		60,
		0,
		360
	)}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		60,
		0,
		360
	)}deg)`;

	hourEl.style.transition = `${hours === 0 ? 'none' : 'all 0.5s ease-in'}`;
	minuteEl.style.transition = `${minutes === 0 ? 'none' : 'all 0.5s ease-in'}`;
	secondEl.style.transition = `${seconds === 0 ? 'none' : 'all 0.5s ease-in'}`;

	const weekday = localDate.split(', ')[0];
	const date = localDate.split(', ')[1];
	const day = date.match(/\d+/)[0];
	const monthYear = date.match(/(\d+)\s+(.+)/)[2];

	timeEl.innerHTML =
		`${hours}:${minutes < 10 ? `0${minutes}` : minutes}` +
		':' +
		`${seconds < 10 ? `0${seconds}` : seconds}`;

	dateEl.innerHTML =
		dateEl.innerHTML = `${weekday}, <span class="date--day">${day}</span> ${monthYear}`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);
