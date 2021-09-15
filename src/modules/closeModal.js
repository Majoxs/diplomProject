const closeModal = () => {

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

export default closeModal;
