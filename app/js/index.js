(function () {
	var modal = document.getElementById('modal');

	var openModalButton = document.getElementById('openModalButton');
	var closeModalButton = document.getElementById('closeModalButton');

	openModalButton.addEventListener('click', openModal);
	closeModalButton.addEventListener('click', closeModal);

	function openModal() {
		modal.style.display = 'block';
	}

	function closeModal() {
		modal.style.display = 'none';
	}
})();