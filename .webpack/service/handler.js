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
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/environments/development.ts":
/*!********************************************!*\
  !*** ./config/environments/development.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    requiresAuth: false,\r\n    envType: 'development'\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZW52aXJvbm1lbnRzL2RldmVsb3BtZW50LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Vudmlyb25tZW50cy9kZXZlbG9wbWVudC50cz9mNTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ0VudiB9IGZyb20gJy4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVpcmVzQXV0aDogZmFsc2UsXG4gIGVudlR5cGU6ICdkZXZlbG9wbWVudCdcbn0gYXMgY29uZmlnRW52O1xuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/environments/development.ts\n");

/***/ }),

/***/ "./config/environments/index.ts":
/*!**************************************!*\
  !*** ./config/environments/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./development */ \"./config/environments/development.ts\");\n/* harmony import */ var _production__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./production */ \"./config/environments/production.ts\");\n\r\n\r\nconst environments = { development: _development__WEBPACK_IMPORTED_MODULE_0__[\"default\"], production: _production__WEBPACK_IMPORTED_MODULE_1__[\"default\"] };\r\nconst ENV = \"development\" || false;\r\nif (!environments[ENV]) {\r\n    throw new Error(`Environment definition ${ENV} not found`);\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (environments[ENV]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZW52aXJvbm1lbnRzL2luZGV4LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnL2Vudmlyb25tZW50cy9pbmRleC50cz8wN2IxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBtb2R1bGVzXG5pbXBvcnQgZGV2ZWxvcG1lbnQgZnJvbSBcIi4vZGV2ZWxvcG1lbnRcIjtcbmltcG9ydCBwcm9kdWN0aW9uIGZyb20gXCIuL3Byb2R1Y3Rpb25cIjtcblxuLy8gSW5kZXggZW52aXJvbm1lbnRzXG5jb25zdCBlbnZpcm9ubWVudHMgPSB7IGRldmVsb3BtZW50LCBwcm9kdWN0aW9uIH07XG5cbi8vIEdldCBlbnZpcm9ubWVudFxuY29uc3QgRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJkZXZlbG9wbWVudFwiO1xuXG5pZiAoIWVudmlyb25tZW50c1tFTlZdKSB7XG4gIHRocm93IG5ldyBFcnJvcihgRW52aXJvbm1lbnQgZGVmaW5pdGlvbiAke0VOVn0gbm90IGZvdW5kYCk7XG59XG5cbi8vIEV4cG9ydCByZWxldmFudCBlbnZpcm9ubWVudCBjb25maWdcbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50c1tFTlZdO1xuXG5leHBvcnQgaW50ZXJmYWNlIGNvbmZpZ0VudiB7XG4gIHJlcXVpcmVzQXV0aDogYm9vbGVhbjtcbiAgZW52VHlwZTogc3RyaW5nO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/environments/index.ts\n");

/***/ }),

/***/ "./config/environments/production.ts":
/*!*******************************************!*\
  !*** ./config/environments/production.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    requiresAuth: true,\r\n    envType: \"production\",\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZW52aXJvbm1lbnRzL3Byb2R1Y3Rpb24udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvZW52aXJvbm1lbnRzL3Byb2R1Y3Rpb24udHM/MWE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWdFbnYgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVpcmVzQXV0aDogdHJ1ZSxcbiAgZW52VHlwZTogXCJwcm9kdWN0aW9uXCIsXG59IGFzIGNvbmZpZ0VudjtcbiJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config/environments/production.ts\n");

/***/ }),

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _environments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments */ \"./config/environments/index.ts\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_environments__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXgudHM/MWIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IGNvbmZpZywgeyBjb25maWdFbnYgfSBmcm9tIFwiLi9lbnZpcm9ubWVudHNcIjtcclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnIGFzIGNvbmZpZ0VudjtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/index.ts\n");

/***/ }),

/***/ "./handler.ts":
/*!********************!*\
  !*** ./handler.ts ***!
  \********************/
/*! exports provided: mainHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainHandler\", function() { return mainHandler; });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! serverless-http */ \"serverless-http\");\n/* harmony import */ var serverless_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serverless_http__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware/auth */ \"./middleware/auth.ts\");\n/* harmony import */ var _middleware_connectToDatabase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware/connectToDatabase */ \"./middleware/connectToDatabase.ts\");\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\r\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\r\napp.post('/user', async (req, res) => {\r\n    const db = await Object(_middleware_connectToDatabase__WEBPACK_IMPORTED_MODULE_7__[\"connectToDatabase\"])();\r\n    const collection = db.collection('users');\r\n    let findUser = await collection.findOne({ email: req.body.email });\r\n    if (findUser)\r\n        return res.status(400).send('User already registered.');\r\n    let newUser = {\r\n        _id: null,\r\n        name: req.body.name,\r\n        email: req.body.email,\r\n        password: req.body.password\r\n    };\r\n    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.genSalt(10);\r\n    newUser.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.hash(newUser.password, salt);\r\n    const data = await collection.insertOne(newUser);\r\n    newUser = data.ops[0];\r\n    const { password } = newUser, resultNewUser = __rest(newUser, [\"password\"]);\r\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(resultNewUser, process.env.ENV_JWT_PRIVATE_KEY);\r\n    res.header('x-auth-token', token).send(resultNewUser);\r\n});\r\napp.get('/me', _middleware_auth__WEBPACK_IMPORTED_MODULE_6__[\"auth\"], async (req, res) => {\r\n    const db = await Object(_middleware_connectToDatabase__WEBPACK_IMPORTED_MODULE_7__[\"connectToDatabase\"])();\r\n    const collection = db.collection('users');\r\n    const data = await collection.findOne({ _id: new mongodb__WEBPACK_IMPORTED_MODULE_3__[\"ObjectId\"](req['user']._id) });\r\n    const { password } = data, resultData = __rest(data, [\"password\"]);\r\n    res.send(resultData);\r\n});\r\napp.post('/login', async (req, res) => {\r\n    const db = await Object(_middleware_connectToDatabase__WEBPACK_IMPORTED_MODULE_7__[\"connectToDatabase\"])();\r\n    const collection = db.collection('users');\r\n    const user = await collection.findOne({ email: req.body.email });\r\n    if (!user)\r\n        return res.status(400).send('Invalid email or password.');\r\n    const validPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.compare(req.body.password, user.password);\r\n    if (!validPassword)\r\n        return res.status(400).send('Invalid email or password.');\r\n    const { password } = user, userData = __rest(user, [\"password\"]);\r\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(userData, process.env.ENV_JWT_PRIVATE_KEY);\r\n    res.status(200).header('x-auth-token', token).json();\r\n});\r\nconst mainHandler = serverless_http__WEBPACK_IMPORTED_MODULE_4__(app);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oYW5kbGVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGFuZGxlci50cz8zNmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IGV4cHJlc3MsIHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgKiBhcyBTZXJ2ZXJsZXNzSHR0cCBmcm9tICdzZXJ2ZXJsZXNzLWh0dHAnO1xuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4vbWlkZGxld2FyZS9hdXRoJztcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi9taWRkbGV3YXJlL2Nvbm5lY3RUb0RhdGFiYXNlJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5cbmFwcC5wb3N0KCcvdXNlcicsIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgZGIgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBjb25zdCBjb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbigndXNlcnMnKTtcblxuICBsZXQgZmluZFVzZXIgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSk7XG4gIGlmIChmaW5kVXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdVc2VyIGFscmVhZHkgcmVnaXN0ZXJlZC4nKTtcblxuICBsZXQgbmV3VXNlciA9IHtcbiAgICBfaWQ6IG51bGwsXG4gICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgcGFzc3dvcmQ6IHJlcS5ib2R5LnBhc3N3b3JkXG4gIH07XG5cbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcbiAgbmV3VXNlci5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1VzZXIucGFzc3dvcmQsIHNhbHQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgY29sbGVjdGlvbi5pbnNlcnRPbmUobmV3VXNlcik7XG5cbiAgbmV3VXNlciA9IGRhdGEub3BzWzBdO1xuXG4gIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnJlc3VsdE5ld1VzZXIgfSA9IG5ld1VzZXI7XG5cbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihyZXN1bHROZXdVc2VyLCBwcm9jZXNzLmVudi5FTlZfSldUX1BSSVZBVEVfS0VZKTtcbiAgcmVzLmhlYWRlcigneC1hdXRoLXRva2VuJywgdG9rZW4pLnNlbmQocmVzdWx0TmV3VXNlcik7XG59KTtcblxuYXBwLmdldCgnL21lJywgYXV0aCwgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCd1c2VycycpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChyZXFbJ3VzZXInXS5faWQpIH0pO1xuICBjb25zdCB7IHBhc3N3b3JkLCAuLi5yZXN1bHREYXRhIH0gPSBkYXRhO1xuICByZXMuc2VuZChyZXN1bHREYXRhKTtcbn0pO1xuXG5hcHAucG9zdCgnL2xvZ2luJywgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICBjb25zdCBkYiA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCd1c2VycycpO1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjb2xsZWN0aW9uLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSk7XG5cbiAgaWYgKCF1c2VyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuJyk7XG5cbiAgY29uc3QgdmFsaWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHJlcS5ib2R5LnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICBpZiAoIXZhbGlkUGFzc3dvcmQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZC4nKTtcblxuICBjb25zdCB7IHBhc3N3b3JkLCAuLi51c2VyRGF0YSB9ID0gdXNlcjtcbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih1c2VyRGF0YSwgcHJvY2Vzcy5lbnYuRU5WX0pXVF9QUklWQVRFX0tFWSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmhlYWRlcigneC1hdXRoLXRva2VuJywgdG9rZW4pLmpzb24oKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgbWFpbkhhbmRsZXI6IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBTZXJ2ZXJsZXNzSHR0cChhcHApO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./handler.ts\n");

/***/ }),

/***/ "./middleware/auth.ts":
/*!****************************!*\
  !*** ./middleware/auth.ts ***!
  \****************************/
/*! exports provided: auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"auth\", function() { return auth; });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config/index.ts\");\n\r\n\r\nconst auth = (req, res, next) => {\r\n    if (!_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requiresAuth) {\r\n        req['user'] = {\r\n            _id: '608f5913b9556635bc1c9835',\r\n            name: 'rodrigo10',\r\n            email: 'r@slino.com.br6'\r\n        };\r\n        return next();\r\n    }\r\n    const token = req.header('x-auth-token');\r\n    if (!token)\r\n        return res.status(401).send('Access denied. No token provided.');\r\n    try {\r\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, process.env.ENV_JWT_PRIVATE_KEY);\r\n        req['user'] = decoded;\r\n        next();\r\n    }\r\n    catch (ex) {\r\n        res.status(400).send('Invalid token.');\r\n    }\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL2F1dGgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2F1dGgudHM/MTZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBhdXRoID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gIGlmICghY29uZmlnLnJlcXVpcmVzQXV0aCkge1xuICAgIHJlcVsndXNlciddID0ge1xuICAgICAgX2lkOiAnNjA4ZjU5MTNiOTU1NjYzNWJjMWM5ODM1JyxcbiAgICAgIG5hbWU6ICdyb2RyaWdvMTAnLFxuICAgICAgZW1haWw6ICdyQHNsaW5vLmNvbS5icjYnXG4gICAgfTtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG5cbiAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVyKCd4LWF1dGgtdG9rZW4nKTtcbiAgaWYgKCF0b2tlbikgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdBY2Nlc3MgZGVuaWVkLiBObyB0b2tlbiBwcm92aWRlZC4nKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5FTlZfSldUX1BSSVZBVEVfS0VZKTtcbiAgICByZXFbJ3VzZXInXSA9IGRlY29kZWQ7XG4gICAgbmV4dCgpO1xuICB9IGNhdGNoIChleCkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdJbnZhbGlkIHRva2VuLicpO1xuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./middleware/auth.ts\n");

/***/ }),

/***/ "./middleware/connectToDatabase.ts":
/*!*****************************************!*\
  !*** ./middleware/connectToDatabase.ts ***!
  \*****************************************/
/*! exports provided: connectToDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectToDatabase\", function() { return connectToDatabase; });\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nlet cachedDb = null;\r\nconst mongoUri = process.env.ENV_MONGO_URI;\r\nasync function connectToDatabase() {\r\n    if (cachedDb) {\r\n        return cachedDb;\r\n    }\r\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect(mongoUri, {\r\n        useNewUrlParser: true,\r\n        useUnifiedTopology: true\r\n    });\r\n    const dbName = new url__WEBPACK_IMPORTED_MODULE_0__[\"URL\"](mongoUri).pathname.substr(1);\r\n    const db = client.db(dbName);\r\n    cachedDb = db;\r\n    return db;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL2Nvbm5lY3RUb0RhdGFiYXNlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9jb25uZWN0VG9EYXRhYmFzZS50cz9lYTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVSTCB9IGZyb20gJ3VybCc7XHJcbmltcG9ydCB7IERiLCBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxubGV0IGNhY2hlZERiOiBEYiA9IG51bGw7XHJcblxyXG5jb25zdCBtb25nb1VyaSA9IHByb2Nlc3MuZW52LkVOVl9NT05HT19VUkk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgaWYgKGNhY2hlZERiKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkRGI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KG1vbmdvVXJpLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGJOYW1lID0gbmV3IFVSTChtb25nb1VyaSkucGF0aG5hbWUuc3Vic3RyKDEpO1xyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudC5kYihkYk5hbWUpO1xyXG5cclxuICBjYWNoZWREYiA9IGRiO1xyXG5cclxuICByZXR1cm4gZGI7XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/connectToDatabase.ts\n");

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