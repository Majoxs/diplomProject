const smoothScrollUp = () => {

	const upBtn = document.querySelector('.up');
	const mainWrapper = document.querySelector('.main-wrapper');

	upBtn.style.display = 'none';

	window.addEventListener('scroll', () => {

		if (window.scrollY >= 600) {
			upBtn.style.display = 'block';
		} else {
			upBtn.style.display = 'none';
		}
	});

	upBtn.addEventListener('click', () => {

		mainWrapper.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	});
};

export default smoothScrollUp;
