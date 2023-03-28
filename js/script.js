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
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				360: {
					slidesPerView: 2,
					spaceBetween: 8,
				},
				576: {
					slidesPerView: 3,
					spaceBetween: 12,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1920: {
					slidesPerView: 5,
					spaceBetween: 16,
				},
			},
		});
	} catch (error) {
		console.log(error);
	}
	
	// 
	try {
		const selectBox = document.querySelector('.select-box'),
			settingBox = document.querySelector('.setting-box'),
			settingBoxItems = document.querySelector('.setting-box__items'),
			selectBoxIcon = document.querySelector('.select-box svg')
			selectBoxItesm = document.querySelector('.select-box__items');

			selectBox.addEventListener('click', () => {
				selectBoxItesm.classList.toggle('active');
				selectBoxIcon.classList.toggle('icon-active')
			})
		settingBox.addEventListener('click', () => {
			settingBox.classList.toggle('setting-box__active');
			settingBoxItems.classList.toggle('active');
			
		})
	} catch (error) {
		console.log(error);
	}
})