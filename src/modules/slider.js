const slider = () => {
	const slider = document.querySelector('.top-slider');
	const slide = document.querySelectorAll('.item');
	const description = document.querySelectorAll('.table');

	let currentSlide = 0,
		interval;

	const prevSlide = (elem, elem2, index, strClass) => {
		elem[index].style.display = 'none';
		elem2[index].classList.remove(strClass);
	};

	const nextSlide = (elem, elem2, index, strClass) => {
		elem[index].style.display = 'block';
		elem2[index].classList.add(strClass);
	};

	const autoPlaySlide = () => {

		prevSlide(slide, description, currentSlide, 'active');
		currentSlide++;
		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, description, currentSlide, 'active');
	};

	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('mouseover', () => {
		stopSlide();
	});

	slider.addEventListener('mouseout', () => {
		startSlide();
	});

	startSlide(3000);

};

export default slider;
