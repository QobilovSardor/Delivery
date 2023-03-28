window.addEventListener('DOMContentLoaded', () => {
	// header language
	try {
		const headerLaguabeBtn = document.querySelector('.default-lagnuage'),
			showLanguageBox = document.querySelector('.header-language__box'),
			headerLanguageList = document.querySelectorAll('.header-language__box li'),
			headerLanguageListImg = document.querySelectorAll('.header-language__box li img');

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

	// ! slider
	try {
		var swiper = new Swiper(".mySwiper2", {
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				360: {
					slidesPerView: 1.3,
					spaceBetween: 8,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 8,
				},
				600: {
					slidesPerView: 2,
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
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
		});
	} catch (error) {
		console.log(error);
	}
	// ! slect box
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
	// ! order list
	try {
		const orderListHeaderBtn = document.querySelectorAll('.order-list__header'),
			ordersProductBox = document.querySelectorAll('.orders-product__box');

		orderListHeaderBtn.forEach((item, index) => {
			item.addEventListener('click', (e) => {
				ordersProductBox.forEach((a, i) => {
					if (i != index) {
						a.classList.remove('active')
					}
				})
				orderListHeaderBtn.forEach((z, t) => {
					if (t != index) {
						z.classList.remove('active-icon')
					}
				})
				ordersProductBox[index].classList.toggle('active');
				e.target.classList.toggle('active-icon')
			})
		})
	} catch (error) {
		console.log(error);
	}

	try {
		const ordersDeliveryBtn = document.querySelectorAll(".btn-green"),
			gettingReadyBox = document.querySelectorAll('.getting-ready__box');

		ordersDeliveryBtn.forEach((item, idx) => {
			item.addEventListener('click', (e) => {
				gettingReadyBox.forEach((x, y) => {
					if (y != idx) {
						x.classList.remove('active');
					}
				})
				gettingReadyBox[idx].classList.toggle('active');
				ordersDeliveryBtn.forEach((a, b) => {
					if (b != idx) {
						a.classList.remove('active-icon');
						a.classList.remove('btn-green__active')
					}
				})
				e.target.classList.toggle('active-icon');
				e.target.classList.toggle('btn-green__active');
				// if(e.target != idx) {
				// 	e.target.classList.remove('active-icon');
				// }
			})
		})
	} catch (error) {
		console.log(error);
	}
})