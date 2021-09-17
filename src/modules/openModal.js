const openModal = () => {

	const callbackBtn = document.querySelector('.callback-btn.hidden-xs'),
		modalOverlay = document.querySelector('.modal-overlay'),
		modalCallback = document.querySelector('.modal-callback');

	callbackBtn.addEventListener('click', () => {
		modalOverlay.style.display = 'block';
		modalCallback.style.display = 'block';
	});

};

export default openModal;
