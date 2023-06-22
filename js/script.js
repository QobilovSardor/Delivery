window.addEventListener("DOMContentLoaded", () => {
  //   "use strict";

  // header language
  try {
    const headerLaguabeBtn = document.querySelector(".default-lagnuage"),
      showLanguageBox = document.querySelector(".header-language__box"),
      headerLanguageList = document.querySelectorAll(
        ".header-language__box li"
      ),
      headerLanguageListImg = document.querySelectorAll(
        ".header-language__box li img"
      );

    headerLaguabeBtn.addEventListener("click", () => {
      showLanguageBox.classList.toggle("active");
    });
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
    const selectBox = document.querySelector(".select-box"),
      settingBox = document.querySelector(".setting-box"),
      settingBoxItems = document.querySelector(".setting-box__items"),
      selectBoxIcon = document.querySelector(".select-box svg");
    selectBoxItesm = document.querySelector(".select-box__items");

    selectBox.addEventListener("click", () => {
      selectBoxItesm.classList.toggle("active");
      selectBoxIcon.classList.toggle("icon-active");
    });
    settingBox.addEventListener("click", () => {
      settingBox.classList.toggle("setting-box__active");
      settingBoxItems.classList.toggle("active");
    });
  } catch (error) {
    console.log(error);
  }
  // ! order list
  try {
    const orderListHeaderBtn = document.querySelectorAll(".order-list__header"),
      ordersProductBox = document.querySelectorAll(".orders-product__box");

    orderListHeaderBtn.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        ordersProductBox.forEach((a, i) => {
          if (i != index) {
            a.classList.remove("active");
          }
        });
        orderListHeaderBtn.forEach((z, t) => {
          if (t != index) {
            z.classList.remove("active-icon");
          }
        });
        ordersProductBox[index].classList.toggle("active");
        e.target.classList.toggle("active-icon");
      });
    });
  } catch (error) {
    console.log(error);
  }

  try {
    const ordersDeliveryBtn = document.querySelectorAll(".btn-green"),
      gettingReadyBox = document.querySelectorAll(".getting-ready__box");

    ordersDeliveryBtn.forEach((item, idx) => {
      item.addEventListener("click", (e) => {
        gettingReadyBox.forEach((x, y) => {
          if (y != idx) {
            x.classList.remove("active");
          }
        });
        gettingReadyBox[idx].classList.toggle("active");
        ordersDeliveryBtn.forEach((a, b) => {
          if (b != idx) {
            a.classList.remove("active-icon");
            a.classList.remove("btn-green__active");
          }
        });
        e.target.classList.toggle("active-icon");
        e.target.classList.toggle("btn-green__active");
        // if(e.target != idx) {
        // 	e.target.classList.remove('active-icon');
        // }
      });
    });
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
		try {
      const timeDropdown = document.querySelector(".time-dropworn"),
        selectBoxItesm = document.querySelector(".select-box__items");

      timeDropdown.addEventListener("click", (e) => {
        selectBoxItesm.classList.toggle("active");
        timeDropdown.classList.toggle("active-icon");
      });
    } catch (error) {
      console.log(error);
    }
	} catch (error) {
		console.log(error);
	}

  // domin html js code

  const location = document.querySelector(".location"),
    locationMenu = document.querySelector(".location-menu"),
    clickTurn = document.querySelector(".click-turn"),
    kartaTool = document.querySelector(".setting-box__items"),
    equipmentBtn = document.querySelector(".equipment-btn"),
    equipmentCount = document.querySelector(".equipment-count"),
    kartaClose = document.querySelector(".karta-close"),
    editBtn = document.querySelector(".edit-karta-btn");

  let Count = true;

  equipmentBtn.addEventListener("click", () => {
    // if (Count) {
    // 	equipmentCount.style.visibility = "visible";
    // 	Count = false;
    // } else if (Count != true){
    // 	equipmentCount.style.visibility = "hidden";
    // 		Count = true;
    // }
    equipmentCount.classList.toggle("active");
  });

  let eb = true;
  editBtn.onclick = function () {
    if (eb) {
      kartaTool.style.display = "block";
      eb = false;
    }
  };
  kartaClose.onclick = function () {
    if (eb != true) {
      kartaTool.style.display = "none";
      eb = true;
    }
  };

  clickTurn.addEventListener("click", () => {
    clickTurn.classList.toggle("click-turn-active");
  });
  let a = true;
  location.onclick = function () {
    if (a) {
      locationMenu.style.display = "block";
      a = false;
    } else if (a != true) {
      locationMenu.style.display = "none";
      a = true;
    }
  };
  var swiper = new Swiper(".mySwiper4", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      36: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 3.5,
        spaceBetween: 8,
      },
      786: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 48,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 35,
      },
    },
  });
});
