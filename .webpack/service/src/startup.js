(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/startup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/environments/development.ts":
/*!************************************************!*\
  !*** ./src/config/environments/development.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    requiresAuth: false,\r\n    envType: 'development'\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2Vudmlyb25tZW50cy9kZXZlbG9wbWVudC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maWcvZW52aXJvbm1lbnRzL2RldmVsb3BtZW50LnRzP2I3NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnRW52IH0gZnJvbSAnLic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVxdWlyZXNBdXRoOiBmYWxzZSxcbiAgZW52VHlwZTogJ2RldmVsb3BtZW50J1xufSBhcyBjb25maWdFbnY7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/environments/development.ts\n");

/***/ }),

/***/ "./src/config/environments/index.ts":
/*!******************************************!*\
  !*** ./src/config/environments/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./development */ \"./src/config/environments/development.ts\");\n/* harmony import */ var _production__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./production */ \"./src/config/environments/production.ts\");\n\r\n\r\nconst environments = { development: _development__WEBPACK_IMPORTED_MODULE_0__[\"default\"], production: _production__WEBPACK_IMPORTED_MODULE_1__[\"default\"] };\r\nconst ENV = \"development\" || false;\r\nif (!environments[ENV]) {\r\n    throw new Error(`Environment definition ${ENV} not found`);\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (environments[ENV]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2Vudmlyb25tZW50cy9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb25maWcvZW52aXJvbm1lbnRzL2luZGV4LnRzPzc3OTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IG1vZHVsZXNcbmltcG9ydCBkZXZlbG9wbWVudCBmcm9tIFwiLi9kZXZlbG9wbWVudFwiO1xuaW1wb3J0IHByb2R1Y3Rpb24gZnJvbSBcIi4vcHJvZHVjdGlvblwiO1xuXG4vLyBJbmRleCBlbnZpcm9ubWVudHNcbmNvbnN0IGVudmlyb25tZW50cyA9IHsgZGV2ZWxvcG1lbnQsIHByb2R1Y3Rpb24gfTtcblxuLy8gR2V0IGVudmlyb25tZW50XG5jb25zdCBFTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCBcImRldmVsb3BtZW50XCI7XG5cbmlmICghZW52aXJvbm1lbnRzW0VOVl0pIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBFbnZpcm9ubWVudCBkZWZpbml0aW9uICR7RU5WfSBub3QgZm91bmRgKTtcbn1cblxuLy8gRXhwb3J0IHJlbGV2YW50IGVudmlyb25tZW50IGNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnRzW0VOVl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgY29uZmlnRW52IHtcbiAgcmVxdWlyZXNBdXRoOiBib29sZWFuO1xuICBlbnZUeXBlOiBzdHJpbmc7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/environments/index.ts\n");

/***/ }),

/***/ "./src/config/environments/production.ts":
/*!***********************************************!*\
  !*** ./src/config/environments/production.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    requiresAuth: true,\r\n    envType: 'production'\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2Vudmlyb25tZW50cy9wcm9kdWN0aW9uLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9lbnZpcm9ubWVudHMvcHJvZHVjdGlvbi50cz83YTAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ0VudiB9IGZyb20gJy4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVpcmVzQXV0aDogdHJ1ZSxcbiAgZW52VHlwZTogJ3Byb2R1Y3Rpb24nXG59IGFzIGNvbmZpZ0VudjtcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/environments/production.ts\n");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments */ \"./src/config/environments/index.ts\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_environments__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9pbmRleC50cz8yZGUyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgY29uZmlnLCB7IGNvbmZpZ0VudiB9IGZyb20gXCIuL2Vudmlyb25tZW50c1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjb25maWcgYXMgY29uZmlnRW52O1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/index.ts\n");

/***/ }),

/***/ "./src/handlers/testHandler.ts":
/*!*************************************!*\
  !*** ./src/handlers/testHandler.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/auth */ \"./src/middleware/auth.ts\");\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\r\nrouter.get('/me', _middleware_auth__WEBPACK_IMPORTED_MODULE_2__[\"auth\"], async (req, res) => {\r\n    res.send('teste');\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvdGVzdEhhbmRsZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlcnMvdGVzdEhhbmRsZXIudHM/YWIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcywgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy9tZScsIGF1dGgsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICByZXMuc2VuZCgndGVzdGUnKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/handlers/testHandler.ts\n");

/***/ }),

/***/ "./src/handlers/userHandler.ts":
/*!*************************************!*\
  !*** ./src/handlers/userHandler.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middleware/auth */ \"./src/middleware/auth.ts\");\n/* harmony import */ var _middleware_connectToDatabase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../middleware/connectToDatabase */ \"./src/middleware/connectToDatabase.ts\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();\r\nrouter.post('/user', async (req, res) => {\r\n    const db = await Object(_middleware_connectToDatabase__WEBPACK_IMPORTED_MODULE_6__[\"connectToDatabase\"])();\r\n    const collection = db.collection('users');\r\n    let findUser = await collection.findOne({ email: req.body.email });\r\n    if (findUser)\r\n        return res.status(400).send('User already registered.');\r\n    let newUser = {\r\n        _id: null,\r\n        name: req.body.name,\r\n        email: req.body.email,\r\n        password: req.body.password\r\n    };\r\n    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.genSalt(10);\r\n    newUser.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.hash(newUser.password, salt);\r\n    const data = await collection.insertOne(newUser);\r\n    newUser = data.ops[0];\r\n    const { password } = newUser, resultNewUser = __rest(newUser, [\"password\"]);\r\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(resultNewUser, process.env.ENV_JWT_PRIVATE_KEY);\r\n    res.header('x-auth-token', token).send(resultNewUser);\r\n});\r\nrouter.get('/me', _middleware_auth__WEBPACK_IMPORTED_MODULE_5__[\"auth\"], async (req, res) => {\r\n    const db = await Object(_middleware_connectToDatabase__WEBPACK_IMPORTED_MODULE_6__[\"connectToDatabase\"])();\r\n    const collection = db.collection('users');\r\n    const data = await collection.findOne({ _id: new mongodb__WEBPACK_IMPORTED_MODULE_3__[\"ObjectId\"](req['user']._id) });\r\n    const { password } = data, resultData = __rest(data, [\"password\"]);\r\n    res.send(resultData);\r\n});\r\nrouter.post('/login', async (req, res) => {\r\n    const db = await Object(_middleware_connectToDatabase__WEBPACK_IMPORTED_MODULE_6__[\"connectToDatabase\"])();\r\n    const collection = db.collection('users');\r\n    const user = await collection.findOne({ email: req.body.email });\r\n    if (!user)\r\n        return res.status(400).send('Invalid email or password.');\r\n    const validPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.compare(req.body.password, user.password);\r\n    if (!validPassword)\r\n        return res.status(400).send('Invalid email or password.');\r\n    const { password } = user, userData = __rest(user, [\"password\"]);\r\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(userData, process.env.ENV_JWT_PRIVATE_KEY);\r\n    res.status(200).header('x-auth-token', token).json();\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlcnMvdXNlckhhbmRsZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlcnMvdXNlckhhbmRsZXIudHM/ODY4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gJy4uL21pZGRsZXdhcmUvY29ubmVjdFRvRGF0YWJhc2UnO1xyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvdXNlcicsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcblxyXG4gIGxldCBmaW5kVXNlciA9IGF3YWl0IGNvbGxlY3Rpb24uZmluZE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9KTtcclxuICBpZiAoZmluZFVzZXIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnVXNlciBhbHJlYWR5IHJlZ2lzdGVyZWQuJyk7XHJcblxyXG4gIGxldCBuZXdVc2VyID0ge1xyXG4gICAgX2lkOiBudWxsLFxyXG4gICAgbmFtZTogcmVxLmJvZHkubmFtZSxcclxuICAgIGVtYWlsOiByZXEuYm9keS5lbWFpbCxcclxuICAgIHBhc3N3b3JkOiByZXEuYm9keS5wYXNzd29yZFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgxMCk7XHJcbiAgbmV3VXNlci5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1VzZXIucGFzc3dvcmQsIHNhbHQpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmluc2VydE9uZShuZXdVc2VyKTtcclxuXHJcbiAgbmV3VXNlciA9IGRhdGEub3BzWzBdO1xyXG5cclxuICBjb25zdCB7IHBhc3N3b3JkLCAuLi5yZXN1bHROZXdVc2VyIH0gPSBuZXdVc2VyO1xyXG5cclxuICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHJlc3VsdE5ld1VzZXIsIHByb2Nlc3MuZW52LkVOVl9KV1RfUFJJVkFURV9LRVkpO1xyXG4gIHJlcy5oZWFkZXIoJ3gtYXV0aC10b2tlbicsIHRva2VuKS5zZW5kKHJlc3VsdE5ld1VzZXIpO1xyXG59KTtcclxuXHJcbnJvdXRlci5nZXQoJy9tZScsIGF1dGgsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChyZXFbJ3VzZXInXS5faWQpIH0pO1xyXG4gIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnJlc3VsdERhdGEgfSA9IGRhdGE7XHJcbiAgcmVzLnNlbmQocmVzdWx0RGF0YSk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy9sb2dpbicsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJyk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSk7XHJcblxyXG4gIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkLicpO1xyXG5cclxuICBjb25zdCB2YWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocmVxLmJvZHkucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICBpZiAoIXZhbGlkUGFzc3dvcmQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZC4nKTtcclxuXHJcbiAgY29uc3QgeyBwYXNzd29yZCwgLi4udXNlckRhdGEgfSA9IHVzZXI7XHJcbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih1c2VyRGF0YSwgcHJvY2Vzcy5lbnYuRU5WX0pXVF9QUklWQVRFX0tFWSk7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5oZWFkZXIoJ3gtYXV0aC10b2tlbicsIHRva2VuKS5qc29uKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/handlers/userHandler.ts\n");

/***/ }),

/***/ "./src/middleware/auth.ts":
/*!********************************!*\
  !*** ./src/middleware/auth.ts ***!
  \********************************/
/*! exports provided: auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config/index.ts\");\n\r\n\r\nconst auth = (req, res, next) => {\r\n    if (!_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requiresAuth) {\r\n        req['user'] = {\r\n            _id: '608f5913b9556635bc1c9835',\r\n            name: 'test',\r\n            email: 'test@test.com'\r\n        };\r\n        return next();\r\n    }\r\n    const token = req.header('x-auth-token');\r\n    if (!token)\r\n        return res.status(401).send('Access denied. No token provided.');\r\n    try {\r\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, process.env.ENV_JWT_PRIVATE_KEY);\r\n        req['user'] = decoded;\r\n        next();\r\n    }\r\n    catch (ex) {\r\n        res.status(400).send('Invalid token.');\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZS9hdXRoLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmUvYXV0aC50cz85ZGIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGF1dGggPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgaWYgKCFjb25maWcucmVxdWlyZXNBdXRoKSB7XG4gICAgcmVxWyd1c2VyJ10gPSB7XG4gICAgICBfaWQ6ICc2MDhmNTkxM2I5NTU2NjM1YmMxYzk4MzUnLFxuICAgICAgbmFtZTogJ3Rlc3QnLFxuICAgICAgZW1haWw6ICd0ZXN0QHRlc3QuY29tJ1xuICAgIH07XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcigneC1hdXRoLXRva2VuJyk7XG4gIGlmICghdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZCgnQWNjZXNzIGRlbmllZC4gTm8gdG9rZW4gcHJvdmlkZWQuJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuRU5WX0pXVF9QUklWQVRFX0tFWSk7XG4gICAgcmVxWyd1c2VyJ10gPSBkZWNvZGVkO1xuICAgIG5leHQoKTtcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCB0b2tlbi4nKTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/middleware/auth.ts\n");

/***/ }),

/***/ "./src/middleware/connectToDatabase.ts":
/*!*********************************************!*\
  !*** ./src/middleware/connectToDatabase.ts ***!
  \*********************************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nlet cachedDb = null;\r\nconst mongoUri = process.env.ENV_MONGO_URI;\r\nasync function connectToDatabase() {\r\n    if (cachedDb) {\r\n        return cachedDb;\r\n    }\r\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect(mongoUri, {\r\n        useNewUrlParser: true,\r\n        useUnifiedTopology: true\r\n    });\r\n    const dbName = new url__WEBPACK_IMPORTED_MODULE_0__[\"URL\"](mongoUri).pathname.substr(1);\r\n    const db = client.db(dbName);\r\n    cachedDb = db;\r\n    return db;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWlkZGxld2FyZS9jb25uZWN0VG9EYXRhYmFzZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlL2Nvbm5lY3RUb0RhdGFiYXNlLnRzPzQ4NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVVJMIH0gZnJvbSAndXJsJztcclxuaW1wb3J0IHsgRGIsIE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5sZXQgY2FjaGVkRGI6IERiID0gbnVsbDtcclxuXHJcbmNvbnN0IG1vbmdvVXJpID0gcHJvY2Vzcy5lbnYuRU5WX01PTkdPX1VSSTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICBpZiAoY2FjaGVkRGIpIHtcclxuICAgIHJldHVybiBjYWNoZWREYjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QobW9uZ29VcmksIHtcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBkYk5hbWUgPSBuZXcgVVJMKG1vbmdvVXJpKS5wYXRobmFtZS5zdWJzdHIoMSk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKGRiTmFtZSk7XHJcblxyXG4gIGNhY2hlZERiID0gZGI7XHJcblxyXG4gIHJldHVybiBkYjtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/middleware/connectToDatabase.ts\n");

/***/ }),

/***/ "./src/startup.ts":
/*!************************!*\
  !*** ./src/startup.ts ***!
  \************************/
/*! exports provided: mainStartup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainStartup\", function() { return mainStartup; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serverless-http */ \"serverless-http\");\n/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _handlers_userHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/userHandler */ \"./src/handlers/userHandler.ts\");\n/* harmony import */ var _handlers_testHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/testHandler */ \"./src/handlers/testHandler.ts\");\n\r\n\r\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\r\napp.use('/user', _handlers_userHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\napp.use('/test', _handlers_testHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\nconst mainStartup = serverless_http__WEBPACK_IMPORTED_MODULE_1__(app);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhcnR1cC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGFydHVwLnRzPzRiNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgU2VydmVybGVzc0h0dHAgZnJvbSAnc2VydmVybGVzcy1odHRwJztcclxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xyXG5pbXBvcnQgdXNlckNvbnRyb2xsZXIgZnJvbSAnLi9oYW5kbGVycy91c2VySGFuZGxlcic7XHJcbmltcG9ydCB0ZXN0Q29udHJvbGxlciBmcm9tICcuL2hhbmRsZXJzL3Rlc3RIYW5kbGVyJztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoJy91c2VyJywgdXNlckNvbnRyb2xsZXIpO1xyXG5hcHAudXNlKCcvdGVzdCcsIHRlc3RDb250cm9sbGVyKTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWluU3RhcnR1cDogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IFNlcnZlcmxlc3NIdHRwKGFwcCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/startup.ts\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbndlYnRva2VuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCI/NjQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///jsonwebtoken\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29kYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIj9kZWZmIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serverless-http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzcy1odHRwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmVybGVzcy1odHRwXCI/N2Y3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2ZXJsZXNzLWh0dHBcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///serverless-http\n");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI/ZGExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///source-map-support/register\n");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCI/NjFlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///url\n");

/***/ })

/******/ })));