window.addEventListener('DOMContentLoaded', () => {
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
	
	try {
		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 5,
			spaceBetween: 16,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	} catch (error) {
		console.log(error);
	}
})