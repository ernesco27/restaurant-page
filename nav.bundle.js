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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/nav.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENrQztBQUNNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERrQztBQUNNO0FBQ1A7QUFDRjtBQUNDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3Q0FBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3Q0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0NBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVDQUFLO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhnQjtBQUNTO0FBQ047QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdUNBQXVDO0FBQ2hELFNBQVMsdUNBQXVDO0FBQ2hELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU5hdkJhciB9IGZyb20gJy4vbmF2LmpzJztcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoKSA9PntcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBjcmVhdGVOYXZCYXIoKTtcclxuXHJcblxyXG4gICAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29udGFjdEhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkJyk7XHJcbiAgICBjb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzISc7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0FkZHJlc3MnO1xyXG4gICAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc3R5bGUnKTtcclxuICAgIGNvbnN0IGNvbnRhY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29udGFjdERldGFpbHMudGV4dENvbnRlbnQgPSAnRGlnaXRhbCBBZGRyZXNzOiBHQS0wMDAtMDAwLTBcXG5Mb2NhdGlvbjogR2hhbmEgLSBUZW1hJztcclxuXHJcblxyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xyXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0RGV0YWlscyk7XHJcblxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRpbmcpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Y3JlYXRlQ29udGFjdH07IiwiaW1wb3J0IEJhbm5lciBmcm9tICcuL2Jhbm5lci5qcGcnO1xyXG5pbXBvcnQgeyBjcmVhdGVOYXZCYXIgfSBmcm9tICcuL25hdi5qcyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUhvbWUgPSAoKT0+e1xyXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY3JlYXRlTmF2QmFyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhlcm9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZXJvQ29udGVudC5jbGFzc0xpc3QuYWRkKCdoZXJvLXRleHQnKTtcclxuXHJcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVyb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29uc3QgaGVyb1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBoZXJvSGVhZGluZy50ZXh0Q29udGVudCA9IGBUZW1hJ3MgRmluZXN0IFJlc3RhdXJhbnRgO1xyXG4gICAgaGVyb1BhcmEudGV4dENvbnRlbnQgPSBgV2UgZG9uJ3QganVzdCBzZWxsIEZvb2QgYnV0IEx1eHVyeS4uLmA7XHJcblxyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb0hlYWRpbmcpO1xyXG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb1BhcmEpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGhlcm9CdG4udGV4dENvbnRlbnQgPSAnT3JkZXIgTm93JztcclxuICAgIFxyXG4gICAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xyXG4gICAgaGVyb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVyb0J0bik7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBiYW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdoZXJvLWltYWdlJyk7XHJcbiAgICBjb25zdCBoZXJvQmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBoZXJvQmFubmVyLnNyYyA9IEJhbm5lcjtcclxuICAgIGJhbm5lckRpdi5hcHBlbmRDaGlsZChoZXJvQmFubmVyKTtcclxuXHJcblxyXG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvQ29udGVudCk7XHJcbiAgICBoZXJvLmFwcGVuZENoaWxkKGJhbm5lckRpdik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZXJvKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBjcmVhdGVIb21lIH07IiwiaW1wb3J0IEJhbm5lciBmcm9tICcuL2Jhbm5lci5qcGcnO1xyXG5pbXBvcnQgeyBjcmVhdGVOYXZCYXIgfSBmcm9tICcuL25hdi5qcyc7XHJcbmltcG9ydCBGb29kMSBmcm9tICcuL2pvbGxvZi5qcGcnO1xyXG5pbXBvcnQgRm9vZDIgZnJvbSAnLi9mdWZ1LmpwZyc7XHJcbmltcG9ydCBGb29kMyBmcm9tICcuL2Jhbmt1LmpwZyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKT0+e1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgY3JlYXRlTmF2QmFyKCk7XHJcblxyXG4gICAgY29uc3QgYmFubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiYW5uZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWFnZScpO1xyXG4gICAgY29uc3QgaGVyb0Jhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaGVyb0Jhbm5lci5zcmMgPSBCYW5uZXI7XHJcbiAgICBiYW5uZXJEaXYuYXBwZW5kQ2hpbGQoaGVyb0Jhbm5lcik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhbm5lckRpdik7XHJcblxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gJ091ciBNZW51JztcclxuICAgIG1lbnVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGluZycpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XHJcblxyXG4gICAgY29uc3QgbWVudTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnUxLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGlsZScpO1xyXG4gICAgY29uc3QgZm9vZDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb2QxRGl2LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWRpdicpO1xyXG4gICAgY29uc3QgZm9vZEltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZm9vZEltYWdlMS5zcmMgPSBGb29kMTtcclxuICAgIGZvb2QxRGl2LmFwcGVuZENoaWxkKGZvb2RJbWFnZTEpO1xyXG5cclxuICAgIGNvbnN0IGZvb2QxVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZm9vZDFIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IGZvb2QxUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb2QxUGFyYS5jbGFzc0xpc3QuYWRkKCdmb29kLXBhcmEnKTtcclxuICAgIGZvb2QxUGFyYS50ZXh0Q29udGVudCA9ICdDb3cgTWVhdCwgQ2hpY2tlbiwgU2F1c2FnZSBhbmQgVmVnZ2llcyc7XHJcbiAgICBmb29kMUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnZm9vZC1kZXNjJyk7XHJcbiAgICBmb29kMUhlYWRpbmcudGV4dENvbnRlbnQgPSAnSm9sbG9mIFJpY2UgJiBDaGlja2VuJztcclxuICAgIGZvb2QxVGV4dERpdi5hcHBlbmRDaGlsZChmb29kMUhlYWRpbmcpO1xyXG4gICAgZm9vZDFUZXh0RGl2LmFwcGVuZENoaWxkKGZvb2QxUGFyYSk7XHJcblxyXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWJ0bicpO1xyXG4gICAgb3JkZXJCdG4udGV4dENvbnRlbnQgPSAnT3JkZXIgTm93JztcclxuXHJcbiAgICBcclxuICAgIG1lbnUxLmFwcGVuZENoaWxkKGZvb2QxRGl2KTtcclxuICAgIG1lbnUxLmFwcGVuZENoaWxkKGZvb2QxVGV4dERpdik7XHJcbiAgICBtZW51MS5hcHBlbmRDaGlsZChvcmRlckJ0bik7XHJcblxyXG5cclxuICAgIGNvbnN0IG1lbnUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Mi5jbGFzc0xpc3QuYWRkKCdtZW51LXRpbGUnKTtcclxuICAgIGNvbnN0IGZvb2QyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb29kMkRpdi5jbGFzc0xpc3QuYWRkKCdpbWFnZS1kaXYnKTtcclxuICAgIGNvbnN0IGZvb2RJbWFnZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGZvb2RJbWFnZTIuc3JjID0gRm9vZDI7XHJcbiAgICBmb29kMkRpdi5hcHBlbmRDaGlsZChmb29kSW1hZ2UyKTtcclxuXHJcbiAgICBjb25zdCBmb29kMlRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGZvb2QySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBmb29kMlBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBmb29kMlBhcmEuY2xhc3NMaXN0LmFkZCgnZm9vZC1wYXJhJyk7XHJcbiAgICBmb29kMlBhcmEudGV4dENvbnRlbnQgPSAnQ293IE1lYXQsIENoaWNrZW4sIEdvYXQgTWVhdCc7XHJcbiAgICBmb29kMkhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnZm9vZC1kZXNjJyk7XHJcbiAgICBmb29kMkhlYWRpbmcudGV4dENvbnRlbnQgPSAnRnVmdSB3aXRoIEdvYXQgTGlnaHQgU291cCc7XHJcbiAgICBmb29kMlRleHREaXYuYXBwZW5kQ2hpbGQoZm9vZDJIZWFkaW5nKTtcclxuICAgIGZvb2QyVGV4dERpdi5hcHBlbmRDaGlsZChmb29kMlBhcmEpO1xyXG5cclxuICAgIGNvbnN0IG9yZGVyQnRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgb3JkZXJCdG4yLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWJ0bicpO1xyXG4gICAgb3JkZXJCdG4yLnRleHRDb250ZW50ID0gJ09yZGVyIE5vdyc7XHJcblxyXG4gICAgbWVudTIuYXBwZW5kQ2hpbGQoZm9vZDJEaXYpO1xyXG4gICAgbWVudTIuYXBwZW5kQ2hpbGQoZm9vZDJUZXh0RGl2KTtcclxuICAgIG1lbnUyLmFwcGVuZENoaWxkKG9yZGVyQnRuMik7XHJcblxyXG5cclxuICAgIGNvbnN0IG1lbnUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51My5jbGFzc0xpc3QuYWRkKCdtZW51LXRpbGUnKTtcclxuXHJcbiAgICBjb25zdCBmb29kM0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vZDNEaXYuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtZGl2Jyk7XHJcbiAgICBjb25zdCBmb29kSW1hZ2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBmb29kSW1hZ2UzLnNyYyA9IEZvb2QzO1xyXG4gICAgZm9vZDNEaXYuYXBwZW5kQ2hpbGQoZm9vZEltYWdlMyk7XHJcblxyXG4gICAgY29uc3QgZm9vZDNUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBmb29kM0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgZm9vZDNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZm9vZDNQYXJhLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtcGFyYScpO1xyXG4gICAgZm9vZDNQYXJhLnRleHRDb250ZW50ID0gJzIgYmFsbHMgb2YgQmFua3Ugc2VydmVkIHdpdGggb2tybyBzdGV3JztcclxuICAgIGZvb2QzSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmb29kLWRlc2MnKTtcclxuICAgIGZvb2QzSGVhZGluZy50ZXh0Q29udGVudCA9ICdCYW5rdSAmIE9rcm8gU3Rldyc7XHJcbiAgICBmb29kM1RleHREaXYuYXBwZW5kQ2hpbGQoZm9vZDNIZWFkaW5nKTtcclxuICAgIGZvb2QzVGV4dERpdi5hcHBlbmRDaGlsZChmb29kM1BhcmEpO1xyXG5cclxuICAgIGNvbnN0IG9yZGVyQnRuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgb3JkZXJCdG4zLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWJ0bicpO1xyXG4gICAgb3JkZXJCdG4zLnRleHRDb250ZW50ID0gJ09yZGVyIE5vdyc7XHJcblxyXG4gICAgbWVudTMuYXBwZW5kQ2hpbGQoZm9vZDNEaXYpO1xyXG4gICAgbWVudTMuYXBwZW5kQ2hpbGQoZm9vZDNUZXh0RGl2KTtcclxuICAgIG1lbnUzLmFwcGVuZENoaWxkKG9yZGVyQnRuMyk7XHJcblxyXG5cclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudTEpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Mik7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUzKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQge2NyZWF0ZU1lbnV9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKT0+e1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdkJhci5pZCA9ICduYXYtYmFyJztcclxuXHJcbiAgICBjb25zdCBuYXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZFbGVtZW50LnRleHRDb250ZW50ID0gJ0xPR08nO1xyXG4gICAgbmF2RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcblxyXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICAgIGNvbnN0IHVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gICAgICAgIHtsYWJlbDogJ0hvbWUnLCBhY3Rpb246IGhhbmRsZUhvbWVDbGlja30sXHJcbiAgICAgICAge2xhYmVsOiAnTWVudScsIGFjdGlvbjogaGFuZGxlTWVudUNsaWNrfSxcclxuICAgICAgICB7bGFiZWw6ICdDb250YWN0IFVzJywgYWN0aW9uOiBoYW5kbGVDb250YWN0Q2xpY2t9XHJcbiAgICBdO1xyXG5cclxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgIGNvbnN0IGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICBcclxuICAgICAgICBsaUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsO1xyXG4gICAgICAgIGxpRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGl0ZW0uYWN0aW9uKTtcclxuICAgICAgIFxyXG4gICAgICAgIHVsRWxlbWVudC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkVsZW1lbnQpO1xyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHVsRWxlbWVudCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDb250YWN0Q2xpY2soKXtcclxuICAgIGNyZWF0ZUNvbnRhY3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKCl7XHJcbiAgICBjcmVhdGVNZW51KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUhvbWVDbGljaygpe1xyXG4gICAgY3JlYXRlSG9tZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVOYXZCYXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbmF2LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9