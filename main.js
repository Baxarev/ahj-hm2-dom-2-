/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

const responseData = [{
  id: 26,
  title: "Побег из Шоушенка",
  imdb: 9.3,
  year: 1994
}, {
  id: 25,
  title: "Крёстный отец",
  imdb: 9.2,
  year: 1972
}, {
  id: 27,
  title: "Крёстный отец 2",
  imdb: 9.0,
  year: 1974
}, {
  id: 1047,
  title: "Тёмный рыцарь",
  imdb: 9.0,
  year: 2008
}, {
  id: 223,
  title: "Криминальное чтиво",
  imdb: 8.9,
  year: 1994
}];
document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector(".tbody");
  let count = 0;
  function renderTable() {
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    if (count === 0) {
      responseData.sort((a, b) => a.id - b.id);
      count++;
    } else if (count === 1) {
      responseData.sort((a, b) => b.id - a.id);
      count++;
    } else if (count === 2) {
      responseData.sort((a, b) => a.title.localeCompare(b.title, "ru"));
      count++;
    } else if (count === 3) {
      responseData.sort((a, b) => b.title.localeCompare(a.title, "ru"));
      count++;
    } else if (count === 4) {
      responseData.sort((a, b) => a.year - b.year);
      count++;
    } else if (count === 5) {
      responseData.sort((a, b) => b.year - a.year);
      count++;
    } else if (count === 6) {
      responseData.sort((a, b) => a.imdb - b.imdb);
      count++;
    } else if (count === 7) {
      responseData.sort((a, b) => b.imdb - a.imdb);
      count = 0;
    }
    responseData.forEach(movie => {
      const row = document.createElement("tr");
      row.setAttribute("data-id", movie.id);
      row.setAttribute("data-title", movie.title);
      row.setAttribute("data-year", movie.year);
      row.setAttribute("data-imdb", movie.imdb);
      const idCell = document.createElement("td");
      idCell.textContent = `#${movie.id}`;
      const titleCell = document.createElement("td");
      titleCell.textContent = movie.title;
      const yearCell = document.createElement("td");
      yearCell.textContent = `(${movie.year})`;
      const imdbCell = document.createElement("td");
      imdbCell.textContent = `imdb: ${movie.imdb.toFixed(2)}`;
      row.appendChild(idCell);
      row.appendChild(titleCell);
      row.appendChild(yearCell);
      row.appendChild(imdbCell);
      tbody.appendChild(row);
    });
  }
  renderTable();
  setInterval(renderTable, 2000);
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;