//Модальное окно

const button = document.querySelector('.nav-btn');

button.addEventListener('click', function (){
	const modal = document.querySelector('#modal');
	
	modal.classList.remove('hidden');
})