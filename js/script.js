window.addEventListener('DOMContentLoaded', () => {

	"use strict";

	// header language
	try {
		const headerLaguabeBtn = document.querySelector('.default-lagnuage'),
			showLanguageBox = document.querySelector('.header-language__box');

		headerLaguabeBtn.addEventListener('click', () => {
			showLanguageBox.classList.toggle('active');
		})
	} catch (error) {
		console.log(error);
	}

})