const serviceModal = () => {

	const servicesBtn = document.querySelector('.button-services'),
		modalOverlay = document.querySelector('.modal-overlay'),
		modalCallback = document.querySelector('.modal-callback');

	servicesBtn.addEventListener('click', () => {
		modalOverlay.style.display = 'block';
		modalCallback.style.display = 'block';
	});

};

export default serviceModal;
