const smoothScrolling = () => {
	const topMenuLinks = document.querySelectorAll('.top-menu a');

	for (const anchor of topMenuLinks) {
		anchor.addEventListener('click', event => {
			event.preventDefault();

			const blockId = anchor.getAttribute('href').substr(1);

			document.getElementById(blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	}
};

export default smoothScrolling;
