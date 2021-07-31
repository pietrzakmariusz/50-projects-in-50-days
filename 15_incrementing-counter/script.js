const counters = document.querySelectorAll('.counter__numbers');

counters.forEach(counter => {
	counter.textContent = '0';

	const updateCounter = () => {
		const target = +counter.dataset.total;
		const current = +counter.textContent;

		const increment = target / 100; // bigger for faster

		if (current < target) {
			counter.textContent = `${Math.ceil(current + increment)}`;
			setTimeout(updateCounter, 1);
		} else {
			counter.textContent = target;
		}
	};

	updateCounter();
});
