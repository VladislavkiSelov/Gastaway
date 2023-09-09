/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n\r\n\r\nconst burger = document.querySelector('.burger_header')\r\nburger.addEventListener('click', () => {\r\n    const navigation = document.querySelector('.navigation')\r\n    if (navigation.style.display === \"block\") {\r\n        navigation.style.display = \"none\";\r\n        burger.classList.remove('close_burger')\r\n        return\r\n    } \r\n    navigation.style.display = \"block\"\r\n    burger.classList.add('close_burger')\r\n})\r\n\n\n//# sourceURL=webpack://gastaway/./js/script.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nfont,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\n/* remember to define focus styles! */\n:focus {\n  outline: 0;\n}\n\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\n/* tables still need 'cellspacing=\"0\"' in the markup */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1330px;\n  padding: 0 15px;\n}\n\n.btn {\n  background: rgb(17, 141, 168);\n  font-size: 18px;\n  padding: 15px 20px;\n  border-radius: 6px;\n  border: none;\n  color: white;\n  cursor: pointer;\n  transition: 1s;\n}\n.btn:hover {\n  background: rgb(12, 103, 124);\n}\n.btn:hover {\n  background: rgb(9, 83, 99);\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-top: 45px;\n  padding-bottom: 45px;\n}\n.header .box_logo {\n  max-width: 160px;\n}\n.header .navigation ul {\n  display: flex;\n}\n.header .navigation ul li {\n  margin-left: 40px;\n  cursor: pointer;\n}\n.header .navigation ul li:hover {\n  color: rgb(12, 103, 124);\n}\n.header .navigation ul li:active {\n  color: rgb(9, 83, 99);\n}\n@media screen and (max-width: 688px) {\n  .header .navigation ul li {\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 688px) {\n  .header .navigation ul {\n    flex-direction: column;\n    padding-top: 20px;\n  }\n}\n@media screen and (max-width: 688px) {\n  .header .navigation {\n    display: none;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(25, 25, 25);\n    z-index: 3;\n    transition: all 1s ease;\n  }\n}\n@media screen and (max-width: 688px) {\n  .header {\n    padding-top: 15px;\n  }\n  .header .burger_header {\n    position: absolute;\n    right: 30px;\n    top: 30px;\n    padding: 10px 0;\n    cursor: pointer;\n    z-index: 5;\n  }\n  .header .burger_header::before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    width: 30px;\n    height: 2px;\n    top: 0px;\n    background: white;\n    transition: 0.4s;\n  }\n  .header .burger_header::after {\n    content: \"\";\n    position: absolute;\n    display: block;\n    width: 30px;\n    height: 2px;\n    bottom: 0px;\n    background: white;\n    transition: 0.4s;\n  }\n  .header .burger_header span {\n    display: block;\n    width: 30px;\n    height: 3px;\n    background: white;\n    position: relative;\n  }\n  .header .close_burger span {\n    opacity: 0;\n    transition: 0.3s;\n  }\n  .header .close_burger::before {\n    transform: rotate(-45deg);\n    transition: 0.4s;\n    top: 15px;\n  }\n  .header .close_burger::after {\n    transform: rotate(45deg);\n    transition: 0.4s;\n    top: 15px;\n  }\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-bottom: 130px;\n}\n.footer .logo {\n  width: 225px;\n  margin-bottom: 20px;\n}\n.footer ul li {\n  margin-bottom: 40px;\n  cursor: pointer;\n}\n.footer ul li:hover {\n  color: rgb(12, 103, 124);\n}\n.footer ul li:active {\n  color: rgb(9, 83, 99);\n}\n.footer .box_social_link a {\n  margin-right: 10px;\n}\n.footer .box_social_link a:hover svg * {\n  stroke: rgb(12, 103, 124);\n}\n.footer .box_icon img {\n  margin-right: 17px;\n  transition: 0.7s;\n  cursor: pointer;\n}\n.footer .box_icon img:hover {\n  transform: scale(1.2);\n}\n@media screen and (max-width: 920px) {\n  .footer .navigation_2 {\n    display: none;\n  }\n}\n@media screen and (max-width: 720px) {\n  .footer nav {\n    display: none;\n  }\n}\n@media screen and (max-width: 580px) {\n  .footer {\n    display: block;\n  }\n  .footer .box_logo {\n    margin-bottom: 20px;\n  }\n}\n\n.main {\n  width: 100%;\n}\n.main .section1 {\n  display: flex;\n  align-items: center;\n  padding-top: 65px;\n  padding-bottom: 95px;\n}\n.main .section1 h3 {\n  font-size: 15px;\n  margin-bottom: 15px;\n}\n.main .section1 .section1_img_wraper {\n  margin-right: 60px;\n  position: relative;\n}\n.main .section1 .section1_img_wraper .line3 {\n  position: absolute;\n  left: -25px;\n  top: -25px;\n  z-index: 2;\n}\n.main .section1 h1 {\n  font-size: 70px;\n  margin-bottom: 90px;\n}\n.main .section1 .next_h1 {\n  font-size: 75px;\n}\n.main .section1 .level_h1 {\n  font-size: 80px;\n  font-weight: 800;\n}\n.main .section1 .box_icon img {\n  margin-right: 17px;\n  transition: 0.7s;\n  cursor: pointer;\n}\n.main .section1 .box_icon img:hover {\n  transform: scale(1.2);\n}\n.main .section1 .wraper_h1 {\n  position: relative;\n  display: inline;\n}\n.main .section1 .wraper_h1 img {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n@media screen and (max-width: 1100px) {\n  .main .section1 {\n    flex-direction: column-reverse;\n  }\n  .main .section1 .section1_text_wraper {\n    margin-bottom: 80px;\n  }\n  .main .section1 .section1_img_wraper {\n    margin-right: 0px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .main .section1 h1 {\n    font-size: 50px;\n    margin-bottom: 50px;\n  }\n  .main .section1 .next_h1 {\n    font-size: 52px;\n  }\n  .main .section1 .level_h1 {\n    font-size: 54px;\n    font-weight: 800;\n  }\n  .main .section1 .section1_img_wraper img {\n    width: 450px;\n  }\n  .main .section1 .section1_img_wraper .line3 {\n    display: none;\n  }\n  .main .section1 .wraper_h1 img {\n    display: none;\n  }\n}\n@media screen and (max-width: 480px) {\n  .main .section1 h1 {\n    font-size: 36px;\n    margin-bottom: 30px;\n  }\n  .main .section1 .next_h1 {\n    font-size: 37px;\n  }\n  .main .section1 .level_h1 {\n    font-size: 38px;\n    font-weight: 800;\n  }\n  .main .section1 .section1_img_wraper img {\n    width: 300px;\n  }\n  .main .section1 .section1_img_wraper .line3 {\n    display: none;\n  }\n}\n.main .section2 {\n  margin-bottom: 260px;\n}\n.main .section2 .head_section2 {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 65px;\n}\n.main .section2 .head_section2 h2 {\n  font-size: 64px;\n  font-weight: 400;\n}\n.main .section2 .box_card {\n  background: black;\n  display: flex;\n  padding: 40px;\n  border-radius: 32px;\n  margin-bottom: 60px;\n}\n.main .section2 .img_box_card {\n  margin-right: 55px;\n}\n.main .section2 .section2_cards_text h4 {\n  color: white;\n  display: inline;\n  font-size: 18px;\n  padding: 0 15px;\n  border-radius: 6px;\n  background: #191919;\n  font-weight: 400;\n}\n.main .section2 .section2_cards_text h3 {\n  margin-top: 55px;\n  font-size: 17px;\n  color: rgb(17, 141, 168);\n  margin-bottom: 20px;\n}\n.main .section2 .section2_cards_text h2 {\n  font-size: 64px;\n  font-weight: 400;\n  margin-bottom: 30px;\n}\n.main .section2 .section2_cards_text p {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 22px;\n  font-weight: 400;\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 820px) {\n  .main .section2 .img_box_card img {\n    width: 250px;\n  }\n  .main .section2 .head_section2 h2 {\n    font-size: 42px;\n  }\n  .main .section2 .section2_cards_text h4 {\n    font-size: 16px;\n  }\n  .main .section2 .section2_cards_text h3 {\n    font-size: 15px;\n  }\n  .main .section2 .section2_cards_text h2 {\n    font-size: 42px;\n  }\n  .main .section2 .section2_cards_text p {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 640px) {\n  .main .section2 .img_box_card img {\n    width: 150px;\n  }\n  .main .section2 .head_section2 h2 {\n    font-size: 36px;\n  }\n  .main .section2 .section2_cards_text h4 {\n    font-size: 14px;\n  }\n  .main .section2 .section2_cards_text h3 {\n    font-size: 13px;\n  }\n  .main .section2 .section2_cards_text h2 {\n    font-size: 28px;\n  }\n  .main .section2 .section2_cards_text p {\n    font-size: 16px;\n  }\n  .main .section2 .box_card {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.main .section3 {\n  display: flex;\n  margin-bottom: 200px;\n}\n.main .section3 button {\n  width: 115px;\n  height: 115px;\n  border-radius: 50%;\n  background: rgb(17, 141, 168);\n  border: none;\n  transition: 1s;\n  cursor: pointer;\n  margin-bottom: 20px;\n}\n.main .section3 button:hover {\n  transform: scale(1.1);\n  background: rgb(12, 103, 124);\n}\n.main .section3 button img {\n  transition: 1s;\n}\n.main .section3 .section3_img {\n  width: 650px;\n}\n.main .section3 h3 {\n  font-size: 18px;\n  color: rgb(17, 141, 168);\n  margin-bottom: 10px;\n}\n.main .section3 h2 {\n  font-size: 64px;\n  margin-bottom: 30px;\n  font-weight: 400;\n}\n.main .section3 p {\n  font-size: 22px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 30px;\n}\n@media screen and (max-width: 1100px) {\n  .main .section3 {\n    flex-direction: column-reverse;\n  }\n  .main .section3 .section3_img {\n    margin-bottom: 80px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .main .section3 button {\n    width: 65px;\n    height: 65px;\n  }\n  .main .section3 button img {\n    width: 40px;\n  }\n  .main .section3 h3 {\n    font-size: 16px;\n  }\n  .main .section3 h2 {\n    font-size: 50px;\n  }\n  .main .section3 p {\n    font-size: 18px;\n  }\n  .main .section3 .section3_img {\n    width: auto;\n  }\n  .main .section3 .section3_img img {\n    width: 400px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .main .section3 h3 {\n    font-size: 14px;\n  }\n  .main .section3 h2 {\n    font-size: 36px;\n  }\n  .main .section3 p {\n    font-size: 16px;\n  }\n  .main .section3 .section3_img img {\n    width: 250px;\n  }\n}\n.main .section4 {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 60px;\n  width: 100%;\n  background: #000;\n  border-radius: 32px;\n  margin-bottom: 200px;\n}\n.main .section4 .section4_text {\n  margin-right: 20px;\n}\n.main .section4 .section4_text h3 {\n  font-size: 18px;\n  color: rgb(17, 141, 168);\n  margin-bottom: 10px;\n}\n.main .section4 .section4_text h2 {\n  font-size: 72px;\n  font-weight: 400;\n  max-width: 430px;\n}\n.main .section4 form {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  max-width: 522px;\n}\n.main .section4 form input {\n  padding: 20px 25px;\n  border-radius: 6px;\n  border: 1px solid #191919;\n  background: #191919;\n  margin-bottom: 20px;\n}\n.main .section4 form button {\n  width: fit-content;\n  font-size: 15px;\n}\n.main .section4 .line3 {\n  height: 90px;\n  position: absolute;\n  left: -25px;\n  bottom: -25px;\n  transform: rotate(-90deg);\n}\n@media screen and (max-width: 768px) {\n  .main .section4 .section4_text h3 {\n    font-size: 16px;\n  }\n  .main .section4 .section4_text h2 {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 630px) {\n  .main .section4 {\n    flex-direction: column;\n    padding: 30px;\n  }\n  .main .section4 .section4_text {\n    margin-bottom: 20px;\n  }\n  .main .section4 .section4_text h3 {\n    font-size: 14px;\n  }\n  .main .section4 .section4_text h2 {\n    font-size: 28px;\n  }\n  .main .section4 img {\n    display: none;\n  }\n}\n.main .section5 {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin-bottom: 200px;\n}\n.main .section5 .section5_card {\n  padding: 50px;\n  border-radius: 32px;\n  background: #000;\n  width: calc((100% - 30px) / 3);\n}\n.main .section5 .section5_card div {\n  margin-bottom: 20px;\n}\n.main .section5 .section5_card h2 {\n  font-size: 28px;\n  font-weight: 400;\n  margin-bottom: 20px;\n  max-width: 317px;\n  line-height: 43.2px;\n}\n.main .section5 .section5_card h3 {\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 400;\n}\n@media screen and (max-width: 768px) {\n  .main .section5 {\n    flex-direction: column;\n  }\n  .main .section5 .section5_card {\n    width: 100%;\n  }\n  .main .section5 .section5_card h2 {\n    font-size: 28px;\n    line-height: 43.2px;\n  }\n  .main .section5 .section5_card h3 {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .main .section5 .section5_card h2 {\n    font-size: 28px;\n  }\n  .main .section5 .section5_card h3 {\n    font-size: 18px;\n  }\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  font-family: \"DM Sans\", sans-serif;\n  font-size: 22px;\n  font-weight: 400;\n  background: rgb(25, 25, 25);\n  color: white;\n  height: 100vh;\n}\n\n.active {\n  color: rgb(17, 141, 168);\n}\n\n.common_block {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.img {\n  max-width: 100%;\n  height: auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gastaway/./scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://gastaway/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gastaway/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gastaway/./scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gastaway/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gastaway/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gastaway/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gastaway/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gastaway/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gastaway/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;