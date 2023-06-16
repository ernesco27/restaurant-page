/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContact: () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");


const createContact = () =>{
    
    const content = document.querySelector('#content');
    content.textContent = '';
    (0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();


    const contactHeading = document.createElement('h1');
    contactHeading.classList.add('contact-head');
    contactHeading.textContent = 'Contact Us!';

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-cont');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Address';
    contactTitle.classList.add('contact-style');
    const contactDetails = document.createElement('p');
    contactDetails.textContent = 'Digital Address: GA-000-000-0\nLocation: Ghana - Tema';


    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactDetails);


    content.appendChild(contactHeading);
    content.appendChild(contactContainer);




}









/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHome: () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.jpg */ "./src/banner.jpg");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");








const createHome = ()=>{
    const hero = document.createElement('div');
    hero.classList.add('hero');
    
    const content = document.querySelector('#content');
    content.textContent = '';
    (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.createNavBar)();


    const heroContent = document.createElement('div');
    heroContent.classList.add('hero-text');

    const heroText = document.createElement('div');
    const heroHeading = document.createElement('h1');
    const heroPara = document.createElement('p');
    heroHeading.textContent = `Tema's Finest Restaurant`;
    heroPara.textContent = `We don't just sell Food but Luxury...`;

    heroText.appendChild(heroHeading);
    heroText.appendChild(heroPara);

    const heroBtn = document.createElement('button');
    heroBtn.textContent = 'Order Now';
    
    heroContent.appendChild(heroText);
    heroContent.appendChild(heroBtn);

    
    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('hero-image');
    const heroBanner = document.createElement('img');
    heroBanner.src = _banner_jpg__WEBPACK_IMPORTED_MODULE_0__;
    bannerDiv.appendChild(heroBanner);


    hero.appendChild(heroContent);
    hero.appendChild(bannerDiv);

    content.appendChild(hero);
}





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.jpg */ "./src/banner.jpg");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _jollof_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jollof.jpg */ "./src/jollof.jpg");
/* harmony import */ var _fufu_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fufu.jpg */ "./src/fufu.jpg");
/* harmony import */ var _banku_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banku.jpg */ "./src/banku.jpg");








const createMenu = ()=>{

    const content = document.querySelector('#content');
    content.textContent = '';
    (0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.createNavBar)();

    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('hero-image');
    const heroBanner = document.createElement('img');
    heroBanner.src = _banner_jpg__WEBPACK_IMPORTED_MODULE_0__;
    bannerDiv.appendChild(heroBanner);
    content.appendChild(bannerDiv);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Our Menu';
    menuHeading.classList.add('menu-heading');
    content.appendChild(menuHeading);

    const menu1 = document.createElement('div');
    menu1.classList.add('menu-tile');
    const food1Div = document.createElement('div');
    food1Div.classList.add('image-div');
    const foodImage1 = document.createElement('img');
    foodImage1.src = _jollof_jpg__WEBPACK_IMPORTED_MODULE_2__;
    food1Div.appendChild(foodImage1);

    const food1TextDiv = document.createElement('div');
    const food1Heading = document.createElement('h2');
    const food1Para = document.createElement('p');
    food1Para.classList.add('food-para');
    food1Para.textContent = 'Cow Meat, Chicken, Sausage and Veggies';
    food1Heading.classList.add('food-desc');
    food1Heading.textContent = 'Jollof Rice & Chicken';
    food1TextDiv.appendChild(food1Heading);
    food1TextDiv.appendChild(food1Para);

    const orderBtn = document.createElement('button');
    orderBtn.classList.add('order-btn');
    orderBtn.textContent = 'Order Now';

    
    menu1.appendChild(food1Div);
    menu1.appendChild(food1TextDiv);
    menu1.appendChild(orderBtn);


    const menu2 = document.createElement('div');
    menu2.classList.add('menu-tile');
    const food2Div = document.createElement('div');
    food2Div.classList.add('image-div');
    const foodImage2 = document.createElement('img');
    foodImage2.src = _fufu_jpg__WEBPACK_IMPORTED_MODULE_3__;
    food2Div.appendChild(foodImage2);

    const food2TextDiv = document.createElement('div');
    const food2Heading = document.createElement('h2');
    const food2Para = document.createElement('p');
    food2Para.classList.add('food-para');
    food2Para.textContent = 'Cow Meat, Chicken, Goat Meat';
    food2Heading.classList.add('food-desc');
    food2Heading.textContent = 'Fufu with Goat Light Soup';
    food2TextDiv.appendChild(food2Heading);
    food2TextDiv.appendChild(food2Para);

    const orderBtn2 = document.createElement('button');
    orderBtn2.classList.add('order-btn');
    orderBtn2.textContent = 'Order Now';

    menu2.appendChild(food2Div);
    menu2.appendChild(food2TextDiv);
    menu2.appendChild(orderBtn2);


    const menu3 = document.createElement('div');
    menu3.classList.add('menu-tile');

    const food3Div = document.createElement('div');
    food3Div.classList.add('image-div');
    const foodImage3 = document.createElement('img');
    foodImage3.src = _banku_jpg__WEBPACK_IMPORTED_MODULE_4__;
    food3Div.appendChild(foodImage3);

    const food3TextDiv = document.createElement('div');
    const food3Heading = document.createElement('h2');
    const food3Para = document.createElement('p');
    food3Para.classList.add('food-para');
    food3Para.textContent = '2 balls of Banku served with okro stew';
    food3Heading.classList.add('food-desc');
    food3Heading.textContent = 'Banku & Okro Stew';
    food3TextDiv.appendChild(food3Heading);
    food3TextDiv.appendChild(food3Para);

    const orderBtn3 = document.createElement('button');
    orderBtn3.classList.add('order-btn');
    orderBtn3.textContent = 'Order Now';

    menu3.appendChild(food3Div);
    menu3.appendChild(food3TextDiv);
    menu3.appendChild(orderBtn3);


    menuContainer.appendChild(menu1);
    menuContainer.appendChild(menu2);
    menuContainer.appendChild(menu3);

    content.appendChild(menuContainer);

};





/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavBar: () => (/* binding */ createNavBar)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");






const createNavBar = ()=>{
    const content = document.querySelector('#content');
    const navBar = document.createElement('nav');
    navBar.id = 'nav-bar';

    const navElement = document.createElement('div');
    navElement.textContent = 'LOGO';
    navElement.classList.add('logo');

    const menuList = document.createElement('div');
    menuList.classList.add('menu');
    const ulElement = document.createElement('ul');

    const menuItems = [
        {label: 'Home', action: handleHomeClick},
        {label: 'Menu', action: handleMenuClick},
        {label: 'Contact Us', action: handleContactClick}
    ];

    menuItems.forEach(function(item){
        const liElement = document.createElement('li');
       
        liElement.textContent = item.label;
        liElement.addEventListener('click', item.action);
       
        ulElement.appendChild(liElement);

        
    });

    
    navBar.appendChild(navElement);
    navBar.appendChild(ulElement);
    content.appendChild(navBar);
};

function handleContactClick(){
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.createContact)();
}

function handleMenuClick(){
    (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createMenu)();
}

function handleHomeClick(){
    (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createHome)();
}



/***/ }),

/***/ "./src/banku.jpg":
/*!***********************!*\
  !*** ./src/banku.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a8bbbacc0e343fcf4c2.jpg";

/***/ }),

/***/ "./src/banner.jpg":
/*!************************!*\
  !*** ./src/banner.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "298b99a51e19400f56fa.jpg";

/***/ }),

/***/ "./src/fufu.jpg":
/*!**********************!*\
  !*** ./src/fufu.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "126c2e7a197c5bbc5ebc.jpg";

/***/ }),

/***/ "./src/jollof.jpg":
/*!************************!*\
  !*** ./src/jollof.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f2ff88b72afb5c24691.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/contact.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWxCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVOYXZCYXIgfSBmcm9tICcuL25hdi5qcyc7XHJcblxyXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT57XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY3JlYXRlTmF2QmFyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnRhY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaGVhZCcpO1xyXG4gICAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyEnO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250Jyk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdBZGRyZXNzJztcclxuICAgIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXN0eWxlJyk7XHJcbiAgICBjb25zdCBjb250YWN0RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnRhY3REZXRhaWxzLnRleHRDb250ZW50ID0gJ0RpZ2l0YWwgQWRkcmVzczogR0EtMDAwLTAwMC0wXFxuTG9jYXRpb246IEdoYW5hIC0gVGVtYSc7XHJcblxyXG5cclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcclxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdERldGFpbHMpO1xyXG5cclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge2NyZWF0ZUNvbnRhY3R9OyIsImltcG9ydCBCYW5uZXIgZnJvbSAnLi9iYW5uZXIuanBnJztcclxuaW1wb3J0IHsgY3JlYXRlTmF2QmFyIH0gZnJvbSAnLi9uYXYuanMnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVIb21lID0gKCk9PntcclxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNyZWF0ZU5hdkJhcigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVyb0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaGVyby10ZXh0Jyk7XHJcblxyXG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlcm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IGhlcm9QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaGVyb0hlYWRpbmcudGV4dENvbnRlbnQgPSBgVGVtYSdzIEZpbmVzdCBSZXN0YXVyYW50YDtcclxuICAgIGhlcm9QYXJhLnRleHRDb250ZW50ID0gYFdlIGRvbid0IGp1c3Qgc2VsbCBGb29kIGJ1dCBMdXh1cnkuLi5gO1xyXG5cclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9IZWFkaW5nKTtcclxuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9QYXJhKTtcclxuXHJcbiAgICBjb25zdCBoZXJvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBoZXJvQnRuLnRleHRDb250ZW50ID0gJ09yZGVyIE5vdyc7XHJcbiAgICBcclxuICAgIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcclxuICAgIGhlcm9Db250ZW50LmFwcGVuZENoaWxkKGhlcm9CdG4pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgYmFubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYW5uZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWFnZScpO1xyXG4gICAgY29uc3QgaGVyb0Jhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaGVyb0Jhbm5lci5zcmMgPSBCYW5uZXI7XHJcbiAgICBiYW5uZXJEaXYuYXBwZW5kQ2hpbGQoaGVyb0Jhbm5lcik7XHJcblxyXG5cclxuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0NvbnRlbnQpO1xyXG4gICAgaGVyby5hcHBlbmRDaGlsZChiYW5uZXJEaXYpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVybyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9OyIsImltcG9ydCBCYW5uZXIgZnJvbSAnLi9iYW5uZXIuanBnJztcclxuaW1wb3J0IHsgY3JlYXRlTmF2QmFyIH0gZnJvbSAnLi9uYXYuanMnO1xyXG5pbXBvcnQgRm9vZDEgZnJvbSAnLi9qb2xsb2YuanBnJztcclxuaW1wb3J0IEZvb2QyIGZyb20gJy4vZnVmdS5qcGcnO1xyXG5pbXBvcnQgRm9vZDMgZnJvbSAnLi9iYW5rdS5qcGcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVNZW51ID0gKCk9PntcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAgIGNyZWF0ZU5hdkJhcigpO1xyXG5cclxuICAgIGNvbnN0IGJhbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmFubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8taW1hZ2UnKTtcclxuICAgIGNvbnN0IGhlcm9CYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGhlcm9CYW5uZXIuc3JjID0gQmFubmVyO1xyXG4gICAgYmFubmVyRGl2LmFwcGVuZENoaWxkKGhlcm9CYW5uZXIpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYW5uZXJEaXYpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9ICdPdXIgTWVudSc7XHJcbiAgICBtZW51SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRpbmcnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhlYWRpbmcpO1xyXG5cclxuICAgIGNvbnN0IG1lbnUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51MS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpbGUnKTtcclxuICAgIGNvbnN0IGZvb2QxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb29kMURpdi5jbGFzc0xpc3QuYWRkKCdpbWFnZS1kaXYnKTtcclxuICAgIGNvbnN0IGZvb2RJbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGZvb2RJbWFnZTEuc3JjID0gRm9vZDE7XHJcbiAgICBmb29kMURpdi5hcHBlbmRDaGlsZChmb29kSW1hZ2UxKTtcclxuXHJcbiAgICBjb25zdCBmb29kMVRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGZvb2QxSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBmb29kMVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBmb29kMVBhcmEuY2xhc3NMaXN0LmFkZCgnZm9vZC1wYXJhJyk7XHJcbiAgICBmb29kMVBhcmEudGV4dENvbnRlbnQgPSAnQ293IE1lYXQsIENoaWNrZW4sIFNhdXNhZ2UgYW5kIFZlZ2dpZXMnO1xyXG4gICAgZm9vZDFIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZGVzYycpO1xyXG4gICAgZm9vZDFIZWFkaW5nLnRleHRDb250ZW50ID0gJ0pvbGxvZiBSaWNlICYgQ2hpY2tlbic7XHJcbiAgICBmb29kMVRleHREaXYuYXBwZW5kQ2hpbGQoZm9vZDFIZWFkaW5nKTtcclxuICAgIGZvb2QxVGV4dERpdi5hcHBlbmRDaGlsZChmb29kMVBhcmEpO1xyXG5cclxuICAgIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBvcmRlckJ0bi5jbGFzc0xpc3QuYWRkKCdvcmRlci1idG4nKTtcclxuICAgIG9yZGVyQnRuLnRleHRDb250ZW50ID0gJ09yZGVyIE5vdyc7XHJcblxyXG4gICAgXHJcbiAgICBtZW51MS5hcHBlbmRDaGlsZChmb29kMURpdik7XHJcbiAgICBtZW51MS5hcHBlbmRDaGlsZChmb29kMVRleHREaXYpO1xyXG4gICAgbWVudTEuYXBwZW5kQ2hpbGQob3JkZXJCdG4pO1xyXG5cclxuXHJcbiAgICBjb25zdCBtZW51MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudTIuY2xhc3NMaXN0LmFkZCgnbWVudS10aWxlJyk7XHJcbiAgICBjb25zdCBmb29kMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vZDJEaXYuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtZGl2Jyk7XHJcbiAgICBjb25zdCBmb29kSW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBmb29kSW1hZ2UyLnNyYyA9IEZvb2QyO1xyXG4gICAgZm9vZDJEaXYuYXBwZW5kQ2hpbGQoZm9vZEltYWdlMik7XHJcblxyXG4gICAgY29uc3QgZm9vZDJUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBmb29kMkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgZm9vZDJQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZm9vZDJQYXJhLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtcGFyYScpO1xyXG4gICAgZm9vZDJQYXJhLnRleHRDb250ZW50ID0gJ0NvdyBNZWF0LCBDaGlja2VuLCBHb2F0IE1lYXQnO1xyXG4gICAgZm9vZDJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtZGVzYycpO1xyXG4gICAgZm9vZDJIZWFkaW5nLnRleHRDb250ZW50ID0gJ0Z1ZnUgd2l0aCBHb2F0IExpZ2h0IFNvdXAnO1xyXG4gICAgZm9vZDJUZXh0RGl2LmFwcGVuZENoaWxkKGZvb2QySGVhZGluZyk7XHJcbiAgICBmb29kMlRleHREaXYuYXBwZW5kQ2hpbGQoZm9vZDJQYXJhKTtcclxuXHJcbiAgICBjb25zdCBvcmRlckJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG9yZGVyQnRuMi5jbGFzc0xpc3QuYWRkKCdvcmRlci1idG4nKTtcclxuICAgIG9yZGVyQnRuMi50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnO1xyXG5cclxuICAgIG1lbnUyLmFwcGVuZENoaWxkKGZvb2QyRGl2KTtcclxuICAgIG1lbnUyLmFwcGVuZENoaWxkKGZvb2QyVGV4dERpdik7XHJcbiAgICBtZW51Mi5hcHBlbmRDaGlsZChvcmRlckJ0bjIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBtZW51MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudTMuY2xhc3NMaXN0LmFkZCgnbWVudS10aWxlJyk7XHJcblxyXG4gICAgY29uc3QgZm9vZDNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb2QzRGl2LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWRpdicpO1xyXG4gICAgY29uc3QgZm9vZEltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZm9vZEltYWdlMy5zcmMgPSBGb29kMztcclxuICAgIGZvb2QzRGl2LmFwcGVuZENoaWxkKGZvb2RJbWFnZTMpO1xyXG5cclxuICAgIGNvbnN0IGZvb2QzVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZm9vZDNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IGZvb2QzUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb2QzUGFyYS5jbGFzc0xpc3QuYWRkKCdmb29kLXBhcmEnKTtcclxuICAgIGZvb2QzUGFyYS50ZXh0Q29udGVudCA9ICcyIGJhbGxzIG9mIEJhbmt1IHNlcnZlZCB3aXRoIG9rcm8gc3Rldyc7XHJcbiAgICBmb29kM0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnZm9vZC1kZXNjJyk7XHJcbiAgICBmb29kM0hlYWRpbmcudGV4dENvbnRlbnQgPSAnQmFua3UgJiBPa3JvIFN0ZXcnO1xyXG4gICAgZm9vZDNUZXh0RGl2LmFwcGVuZENoaWxkKGZvb2QzSGVhZGluZyk7XHJcbiAgICBmb29kM1RleHREaXYuYXBwZW5kQ2hpbGQoZm9vZDNQYXJhKTtcclxuXHJcbiAgICBjb25zdCBvcmRlckJ0bjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG9yZGVyQnRuMy5jbGFzc0xpc3QuYWRkKCdvcmRlci1idG4nKTtcclxuICAgIG9yZGVyQnRuMy50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnO1xyXG5cclxuICAgIG1lbnUzLmFwcGVuZENoaWxkKGZvb2QzRGl2KTtcclxuICAgIG1lbnUzLmFwcGVuZENoaWxkKGZvb2QzVGV4dERpdik7XHJcbiAgICBtZW51My5hcHBlbmRDaGlsZChvcmRlckJ0bjMpO1xyXG5cclxuXHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUxKTtcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudTIpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Myk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHtjcmVhdGVNZW51fTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSAnLi9ob21lLmpzJztcclxuXHJcblxyXG5cclxuY29uc3QgY3JlYXRlTmF2QmFyID0gKCk9PntcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXZCYXIuaWQgPSAnbmF2LWJhcic7XHJcblxyXG4gICAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2RWxlbWVudC50ZXh0Q29udGVudCA9ICdMT0dPJztcclxuICAgIG5hdkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcbiAgICBjb25zdCB1bEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgICAgICB7bGFiZWw6ICdIb21lJywgYWN0aW9uOiBoYW5kbGVIb21lQ2xpY2t9LFxyXG4gICAgICAgIHtsYWJlbDogJ01lbnUnLCBhY3Rpb246IGhhbmRsZU1lbnVDbGlja30sXHJcbiAgICAgICAge2xhYmVsOiAnQ29udGFjdCBVcycsIGFjdGlvbjogaGFuZGxlQ29udGFjdENsaWNrfVxyXG4gICAgXTtcclxuXHJcbiAgICBtZW51SXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGlFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbS5sYWJlbDtcclxuICAgICAgICBsaUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpdGVtLmFjdGlvbik7XHJcbiAgICAgICBcclxuICAgICAgICB1bEVsZW1lbnQuYXBwZW5kQ2hpbGQobGlFbGVtZW50KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZFbGVtZW50KTtcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZCh1bEVsZW1lbnQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ29udGFjdENsaWNrKCl7XHJcbiAgICBjcmVhdGVDb250YWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1lbnVDbGljaygpe1xyXG4gICAgY3JlYXRlTWVudSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVIb21lQ2xpY2soKXtcclxuICAgIGNyZWF0ZUhvbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTmF2QmFyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NvbnRhY3QuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=