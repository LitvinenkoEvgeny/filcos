var form = document.querySelector('.c-unsubscribe__form');
var formSubmitButton = form.querySelector('.c-unsubscribe__submit');

function onFormChange(e) {
	formSubmitButton.removeAttribute('disabled');
}

form.addEventListener('change', onFormChange, true)