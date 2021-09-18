const carousel = () => {
	const widthUserWindow = document.documentElement.clientWidth;

	let position = 0,
		slidesToShow,
		slidesToScroll = 1;

	if (widthUserWindow > 975) {
		slidesToShow = 3;
	} else if (widthUserWindow > 650) {
		slidesToShow = 2;
	} else {
		slidesToShow = 1;
	}

	const track = document.querySelector('.services-carousel'),
		container = document.querySelector('.services-elements'),
		items = document.querySelectorAll('.item-slide'),
		btnPrev = document.querySelector('.arrow-left'),
		btnNext = document.querySelector('.arrow-right'),
		itemsCount = items.length,
		itemWidth = (container.clientWidth / slidesToShow) + 1,
		movePosition = slidesToScroll * itemWidth;

	const setPosition = () => {
		track.style.transform = `translateX(${position}px)`;
	};

	const checkBtns = () => {
		btnPrev.disabled = position === 0;
		btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
	};

	checkBtns();

	items.forEach(item => {
		item.style.minWidth = `${itemWidth}px`;
	});

	btnNext.addEventListener('click', () => {
		const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

		position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	btnPrev.addEventListener('click', () => {
		const itemsLeft = Math.abs(position) / itemWidth;

		position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

		setPosition();
		checkBtns();
	});

	container.addEventListener('click', event => {
		let target = event.target;

		if (target.classList.contains('absolute')) {
			document.querySelector('.modal-overlay').style.display = 'block';
			document.querySelector('.modal-callback').style.display = 'block';
		}
	});

	const closeModalBtn = document.querySelector('.modal-close > img'),
		modalOverlay = document.querySelector('.modal-overlay'),
		modalCallback = document.querySelector('.modal-callback');

	const displayNone = () => {
		modalOverlay.style.display = 'none';
		modalCallback.style.display = 'none';
	};

	closeModalBtn.addEventListener('click', displayNone);
	modalOverlay.addEventListener('click', displayNone);

};

export default carousel;
