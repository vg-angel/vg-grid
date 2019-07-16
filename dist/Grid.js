var Grid =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Grid.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Grid.ts":
/*!*********************!*\
  !*** ./src/Grid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Grid {\n    constructor(params) {\n        this.p = params;\n        this.p.center = params.center || { x: 0, y: 0 };\n        return this;\n    }\n    /** Getters and Setters */\n    get center() {\n        return this.p.center;\n    }\n    set center(center) {\n        this.p.center = center;\n    }\n    get cx() {\n        return this.p.center.x;\n    }\n    set cx(x) {\n        this.p.center.x = x;\n    }\n    get cy() {\n        return this.p.center.y;\n    }\n    set cy(y) {\n        this.p.center.y = y;\n    }\n    get width() {\n        return this.p.width;\n    }\n    set width(val) {\n        this.p.width = val;\n    }\n    get height() {\n        return this.p.height;\n    }\n    set height(val) {\n        this.p.height = val;\n    }\n    get unitw() {\n        return this.p.unitw;\n    }\n    set unitw(val) {\n        this.p.unitw = val;\n    }\n    get unith() {\n        return this.p.unith;\n    }\n    set unith(val) {\n        this.p.unith = val;\n    }\n    get ctx() {\n        return this.p.ctx;\n    }\n    set ctx(val) {\n        this.p.ctx = val;\n    }\n    /** Private methods */\n    /**Calculate points to draw Horizontal and Vertical Lines*/\n    calcHVL() {\n        let totalx = this.width / this.unitw;\n        let totaly = this.height / this.unith;\n        let points = new Array(totalx + totaly);\n        for (let i = 0; i < totaly / 2 + 1; i++) {\n            points.push(this.cx - this.width / 2, this.cy + this.unith * i, this.cx + this.width / 2, this.cy + this.unith * i, this.cx - this.width / 2, this.cy - this.unith * i, this.cx + this.width / 2, this.cy - this.unith * i);\n        }\n        for (let i = 0; i < totalx / 2 + 1; i++) {\n            points.push(this.cx + this.unitw * i, this.cy - this.height / 2, this.cx + this.unitw * i, this.cy + this.height / 2, this.cx - this.unitw * i, this.cy - this.height / 2, this.cx - this.unitw * i, this.cy + this.height / 2);\n        }\n        //let buffer = new ArrayBuffer(totalx+totaly)\n        this.gridPoints = points;\n    }\n    draw() {\n        for (let i = 0; i < this.gridPoints.length; i += 4) {\n            let { ctx } = this;\n            ctx.beginPath();\n            ctx.moveTo(this.gridPoints[i], this.gridPoints[i + 1]);\n            ctx.lineTo(this.gridPoints[i + 2], this.gridPoints[i + 3]);\n            ctx.stroke();\n            ctx.closePath();\n        }\n    }\n    /** public methods */\n    /** set default parameters */\n    defaults() {\n        this.cx = 200;\n        this.cy = 200;\n        this.height = 300;\n        this.width = 300;\n        this.unith = 30;\n        this.unitw = 30;\n    }\n    init() {\n        this.calcHVL();\n        this.draw();\n    }\n    log() {\n        console.log(\"points \", this.gridPoints, \"\\n\", \"center\", this.center);\n    }\n    ang() {\n        return Math.atan2(this.cy, this.cx);\n    }\n}\nexports.default = Grid;\n\n\n//# sourceURL=webpack://Grid/./src/Grid.ts?");

/***/ })

/******/ });