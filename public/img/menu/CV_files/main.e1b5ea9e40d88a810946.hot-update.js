webpackHotUpdate("main",{

/***/ "./src/components/experience/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/experience/index.jsx ***!
  \*********************************************/
/*! exports provided: experiences, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiences", function() { return experiences; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./src/components/experience/element.jsx");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/components/experience/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/smarzykmathieu/code_work/cv_project/src/components/experience/index.jsx";



const experiences = [{
  name: "Alternance à Spartoo",
  link: "https://digital-grenoble.com/campus-numerique-in-the-alps/",
  start: "2016",
  end: "2018"
}, {
  name: "Développeur web chez Spartoo",
  link: "https://spartoo.com",
  start: "2018",
  end: "2019"
}, {
  name: "Développeur web chez Nexus/Optim",
  link: "https://fr-fr.nexus-ag.de/home",
  start: "2019",
  end: "Aujourd'hui"
}];

const Experience = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, experiences.map(exp => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_element__WEBPACK_IMPORTED_MODULE_1__["default"], {
    experience: exp,
    key: exp.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience_bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience_bar_element-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "element_bar-last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ })

})
//# sourceMappingURL=main.e1b5ea9e40d88a810946.hot-update.js.map