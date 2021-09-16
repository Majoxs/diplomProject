const sendForm = () => {

	const phone = document.getElementById('tel'),
		name = document.getElementById('fio'),
		form = document.getElementById('form-callback');

	const validForPhone = function () {
		this.value = this.value.replace(/[^\+\d]/g, '');
	};

	const validForName = function () {
		this.value = this.value.replace(/[^а-яё\s]/gi, '');
	};

	phone.addEventListener('input', validForPhone);
	name.addEventListener('input', validForName);

	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
		statusMessage = document.createElement('div');

	statusMessage.style.cssText = 'font-size: 2rem; margin: 1rem 0;';

	const clearInput = () => {
		phone.value = '';
		name.value = '';
		setTimeout(() => {
			statusMessage.style.display = 'none';
		}, 4000);
	};

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		form.appendChild(statusMessage);

		const formData = new FormData(form);
		let body = {};

		formData.forEach((val, key) => {
			body[key] = val;
		});
		statusMessage.textContent = loadMessage;

		postData(formData)
			.then(response => {
				if (response.status !== 200) {
					throw new Error('status network not 200');
				}
				statusMessage.textContent = successMessage;
			})
			.catch(error => {
				statusMessage.textContent = errorMessage;
				console.error(error);
			})
			.finally(clearInput);
	});

	const postData = formData => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify([...formData])
	});

};

export default sendForm;
