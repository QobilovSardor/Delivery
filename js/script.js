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

	// product html js code

	try {
		const sizeBtn = document.querySelectorAll(".size-tool button");
		const doughBtn = document.querySelectorAll(".dough-tool button");
		const priceTools = document.querySelectorAll(".price-tools div");
		const purchase = document.querySelectorAll(".purchase");
		const addModal = document.querySelector(".add-modal");
		const closeModal = document.querySelector(".modal-close");
		const arrowDown = document.querySelector(".footer_link_title_button");
		const arrowDown2 = document.querySelector(".footer-series-title");
		const mediaFooter = document.querySelector(".media-footer");
		const mediaFooter2 = document.querySelector(".series-5");
		let body = document.querySelector("body");

		arrowDown.addEventListener("click", () => {
			mediaFooter.classList.toggle("media-footer-active");
		});
		arrowDown2.addEventListener("click", () => {
			mediaFooter2.classList.toggle("media-footer-active");
		});

		modal = true;
		purchase.forEach((item) => {
			item.onclick = function () {
				if (modal) {
					addModal.style.display = "block";
					modal = false;
					// body.style.overflowY = "hidden";
				}
			};
		});

		closeModal.addEventListener("click", function () {
			if (modal != true) {
				addModal.style.display = "none";
				// body.style.overflowY = "visible";
				modal = true;
			}
		});

		sizeBtn.forEach((item, index) => {
			item.onclick = function () {
				sizeBtn.forEach((a, i) => {
					if (i != index) {
						a.classList.remove("size-click");
					}
				});
				this.classList.add("size-click");
			};
		});
		doughBtn.forEach((item, index) => {
			item.onclick = function () {
				doughBtn.forEach((a, i) => {
					if (i != index) {
						a.classList.remove("dough-click");
					}
				});
				this.classList.add("dough-click");
			};
		});
		priceTools.forEach((item, index) => {
			item.onclick = function () {
				priceTools.forEach((a, i) => {
					if (i != index) {
						a.classList.remove("price-card-click");
					}
				});
				this.classList.add("price-card-click");
			};
		});
	} catch (error) {
		console.log(error);
	}

	try {
		const seriesOne = document.querySelector('.series-one'),
			selectBoxItems2 = document.querySelector('.select-box__items')

		seriesOne.addEventListener('click', () => {
			selectBoxItems2.classList.toggle('active');
		})
	} catch (error) {
		console.log(error);
	}

	try {
		const seriesTwoModal = document.querySelector(".series-two__modal"),
			seriesTwoBtn = document.querySelector(".series-two"),
			btnClose = document.querySelector(".btn-close");

		seriesTwoBtn.addEventListener('click', () => {
			seriesTwoModal.classList.add('active');
			document.body.style.overflow = 'hidden';
		})
		btnClose.addEventListener("click", () => {
			console.log(this);
			seriesTwoModal.classList.remove('active')
			document.body.style.overflow = 'auto';
		})
		seriesTwoModal.addEventListener('click', (e) => {
			if (e.target === seriesTwoModal) {
				e.target.classList.remove('active')
			}
		})
	} catch (error) {
		console.log(error);
	}
	
	try {
		const seriesThreeModal = document.querySelector('.series-three__modal'),
		seriesThreeBtn = document.querySelector('.series-three');
		
		seriesThreeBtn.addEventListener('click', () => {
			seriesThreeModal.classList.toggle('active');
		})
	} catch (error) {
		console.log(error);
	}
})