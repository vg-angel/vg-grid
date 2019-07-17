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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vg-vector/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vg-vector/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var vec =\n/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./index.ts\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./index.ts\":\n/*!******************!*\\\n  !*** ./index.ts ***!\n  \\******************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nconst vec2_1 = __webpack_require__(/*! ./src/vec2/vec2 */ \\\"./src/vec2/vec2.ts\\\");\\r\\nexports.Vector2D = vec2_1.default;\\r\\n\\n\\n//# sourceURL=webpack://vec/./index.ts?\");\n\n/***/ }),\n\n/***/ \"./src/abstract/vector.ts\":\n/*!********************************!*\\\n  !*** ./src/abstract/vector.ts ***!\n  \\********************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nclass Vector {\\r\\n    constructor(...args) {\\r\\n        let data;\\r\\n        if (args.length < 2)\\r\\n            throw \\\"incorrect number of parameters\\\";\\r\\n        else {\\r\\n            data = new Float32Array(args.length);\\r\\n            for (let i = 0; i < args.length; i++) {\\r\\n                data[i] = args[i];\\r\\n            }\\r\\n        }\\r\\n        this.data = data;\\r\\n        return this;\\r\\n    }\\r\\n    add(vec) {\\r\\n        for (let i = 0; i < vec.data.length; i++) {\\r\\n            this.data[i] += vec.data[i];\\r\\n        }\\r\\n        return this;\\r\\n    }\\r\\n    sub(vec) {\\r\\n        for (let i = 0; i < vec.data.length; i++) {\\r\\n            this.data[i] -= vec.data[i];\\r\\n        }\\r\\n        return this;\\r\\n    }\\r\\n    mult(scalar) {\\r\\n        for (let i = 0; i < this.data.length; i++) {\\r\\n            this.data[i] *= scalar;\\r\\n        }\\r\\n        return this;\\r\\n    }\\r\\n    div(scalar) {\\r\\n        for (let i = 0; i < this.data.length; i++) {\\r\\n            this.data[i] /= scalar;\\r\\n        }\\r\\n        return this;\\r\\n    }\\r\\n    dot(vec) {\\r\\n        let sum = 0;\\r\\n        for (let i = 0; i < this.data.length; i++) {\\r\\n            sum += this.data[i] * vec.data[i];\\r\\n        }\\r\\n        return sum;\\r\\n    }\\r\\n}\\r\\nexports.default = Vector;\\r\\n\\n\\n//# sourceURL=webpack://vec/./src/abstract/vector.ts?\");\n\n/***/ }),\n\n/***/ \"./src/globals.ts\":\n/*!************************!*\\\n  !*** ./src/globals.ts ***!\n  \\************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nlet EPSILON = 1e-10;\\r\\nexports.EPSILON = EPSILON;\\r\\nfunction toDegrees(radian) {\\r\\n    return radian * 180 / Math.PI;\\r\\n}\\r\\nexports.toDegrees = toDegrees;\\r\\nfunction toRadians(degree) {\\r\\n    return degree * Math.PI / 180;\\r\\n}\\r\\nexports.toRadians = toRadians;\\r\\nfunction randomInt(limits) {\\r\\n    let ran;\\r\\n    if (Array.isArray(limits)) {\\r\\n        ran = ~~(Math.random() * (limits[1] - limits[0]) + limits[0]);\\r\\n    }\\r\\n    else {\\r\\n        ran = ~~(Math.random() * 500);\\r\\n    }\\r\\n    return ran;\\r\\n}\\r\\nexports.randomInt = randomInt;\\r\\n\\n\\n//# sourceURL=webpack://vec/./src/globals.ts?\");\n\n/***/ }),\n\n/***/ \"./src/vec2/vec2.ts\":\n/*!**************************!*\\\n  !*** ./src/vec2/vec2.ts ***!\n  \\**************************/\n/*! no static exports found */\n/***/ (function(module, exports, __webpack_require__) {\n\n\"use strict\";\neval(\"\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nconst vector_1 = __webpack_require__(/*! ../abstract/vector */ \\\"./src/abstract/vector.ts\\\");\\r\\nconst globals_1 = __webpack_require__(/*! ../globals */ \\\"./src/globals.ts\\\");\\r\\nclass Vector2D extends vector_1.default {\\r\\n    constructor(x, y) {\\r\\n        x = x || 0;\\r\\n        y = x || 0;\\r\\n        super(x, y);\\r\\n        return this;\\r\\n    }\\r\\n    //getters and setters\\r\\n    get x() {\\r\\n        return this.data[0];\\r\\n    }\\r\\n    get y() {\\r\\n        return this.data[1];\\r\\n    }\\r\\n    set x(val) {\\r\\n        this.data[0] = val;\\r\\n    }\\r\\n    set y(val) {\\r\\n        this.data[1] = val;\\r\\n    }\\r\\n    get len() {\\r\\n        return Math.hypot(this.y, this.x);\\r\\n    }\\r\\n    set len(len) {\\r\\n        let ang = this.ang;\\r\\n        this.x = Math.cos(ang) * len;\\r\\n        this.y = Math.sin(ang) * len;\\r\\n    }\\r\\n    get ang() {\\r\\n        return Math.atan2(this.y, this.x);\\r\\n    }\\r\\n    set ang(ang) {\\r\\n        let len = this.len;\\r\\n        this.x = Math.cos(ang) * len;\\r\\n        this.y = Math.sin(ang) * len;\\r\\n    }\\r\\n    //public methods\\r\\n    norm() {\\r\\n        return Vector2D.norm(new Vector2D(this.x, this.y));\\r\\n    }\\r\\n    update(x, y) {\\r\\n        this.x = x;\\r\\n        this.y = y;\\r\\n        return this;\\r\\n    }\\r\\n    neg() {\\r\\n        this.x *= -1;\\r\\n        this.y *= -1;\\r\\n        return this;\\r\\n    }\\r\\n    zero() {\\r\\n        this.x = 0;\\r\\n        this.y = 0;\\r\\n    }\\r\\n    rotate(angle) {\\r\\n        this.ang = this.ang + angle;\\r\\n        return this;\\r\\n    }\\r\\n    log() {\\r\\n        console.log(\\\" x: \\\", this.x, \\\"\\\\n\\\", \\\"y: \\\", this.y, \\\"\\\\n\\\", \\\"len: \\\", this.len, \\\"\\\\n\\\", \\\"ang: \\\", (() => {\\r\\n            let ang = this.ang;\\r\\n            if (this.ang < 0) {\\r\\n                ang = Math.PI * 2 + ang;\\r\\n            }\\r\\n            return globals_1.toDegrees(ang);\\r\\n        })());\\r\\n        return \\\"data\\\";\\r\\n    }\\r\\n    //static methods\\r\\n    static random(limits) {\\r\\n        if (!limits) {\\r\\n            limits = [0, 300];\\r\\n        }\\r\\n        let x = globals_1.randomInt(limits);\\r\\n        let y = globals_1.randomInt(limits);\\r\\n        return new Vector2D(x, y);\\r\\n    }\\r\\n    static distance(vec1, vec2) {\\r\\n        let dy = vec1.y - vec2.y, dx = vec1.x - vec2.x;\\r\\n        return Math.hypot(dy, dx);\\r\\n    }\\r\\n    static norm(vec1) {\\r\\n        let output;\\r\\n        if (vec1) {\\r\\n            let { len, x, y } = vec1;\\r\\n            output = new Vector2D(x / len, y / len);\\r\\n        }\\r\\n        else {\\r\\n            output = new Vector2D(0, 0);\\r\\n            output.len = 1;\\r\\n        }\\r\\n        return output;\\r\\n    }\\r\\n    static totalEqual(vec1, vec2) {\\r\\n        return vec1.len - vec2.len === 0 &&\\r\\n            vec1.ang - vec2.ang === 0;\\r\\n    }\\r\\n    static areEquals(vec1, vec2, boundary) {\\r\\n        let b = boundary || 1;\\r\\n        return Math.abs(vec1.len - vec2.len) <= globals_1.EPSILON + b &&\\r\\n            Math.abs(vec1.ang - vec2.ang) <= globals_1.EPSILON + b;\\r\\n    }\\r\\n    static clone(vec) {\\r\\n        return new Vector2D(vec.x, vec.y);\\r\\n    }\\r\\n    static dot(vec1, vec2) {\\r\\n        return vec1.x * vec2.x + vec1.y * vec2.y;\\r\\n    }\\r\\n    static angleBeet(vec1, vec2) {\\r\\n        let dot = Vector2D.dot(vec1, vec2), l1 = vec1.len, l2 = vec2.len;\\r\\n        return Math.acos(dot / l1 * l2);\\r\\n    }\\r\\n    static add(a, b) {\\r\\n        let out = new Vector2D();\\r\\n        out.x = a.x + b.x;\\r\\n        out.y = a.y + b.y;\\r\\n        return out;\\r\\n    }\\r\\n    static sub(a, b) {\\r\\n        let out = new Vector2D();\\r\\n        out.x = a.x + b.x;\\r\\n        out.y = a.y + b.y;\\r\\n    }\\r\\n    static mul(a, n) {\\r\\n        let out = new Vector2D();\\r\\n        out.x = a.x * n;\\r\\n        out.y = a.y * n;\\r\\n        return out;\\r\\n    }\\r\\n    static div(a, n) {\\r\\n        let out = new Vector2D();\\r\\n        out.x = a.x / n;\\r\\n        out.y = a.y / n;\\r\\n        return out;\\r\\n    }\\r\\n}\\r\\nexports.default = Vector2D;\\r\\n\\n\\n//# sourceURL=webpack://vec/./src/vec2/vec2.ts?\");\n\n/***/ })\n\n/******/ });\n\n//# sourceURL=webpack://Grid/./node_modules/vg-vector/dist/index.js?");

/***/ }),

/***/ "./src/Grid.ts":
/*!*********************!*\
  !*** ./src/Grid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst vg_vector_1 = __webpack_require__(/*! vg-vector */ \"./node_modules/vg-vector/dist/index.js\");\nclass Grid {\n    constructor(p) {\n        let { ctx, cp, unit, width, height } = p;\n        this.height = width || 300;\n        this.width = height || 300;\n        this.ctx = ctx;\n        this.cp = new vg_vector_1.Vector2D(cp.x, cp.y);\n        this.unit = {\n            x: unit.x,\n            y: unit.y,\n        };\n        this.points = [];\n    }\n    // -----GETTERS AND SETTERS\n    /** get Unit vectors values*/\n    get unitx() {\n        return this.unit.x;\n    }\n    /**get the unit vector in y */\n    get unity() {\n        return this.unit.y;\n    }\n    /** get center point in x */\n    get cpx() {\n        return this.cp.x;\n    }\n    /**set center point in x */\n    set cpx(n) {\n        this.cp.x = n;\n    }\n    /**center point in y */\n    get cpy() {\n        return this.cp.y;\n    }\n    set cpy(n) {\n        this.cp.y = n;\n    }\n    //-----private methods\n    /** get the angle from the unit vestor used to draw X-axis */\n    get angX() {\n        return this.unit.x.ang;\n    }\n    get angY() {\n        return this.unit.y.ang;\n    }\n    XAxisPoints() {\n        let ang = this.angX;\n        let x = new vg_vector_1.Vector2D();\n        x.len = this.width / 2;\n        x.ang = ang;\n        let p1 = vg_vector_1.Vector2D.add(this.cp, x);\n        let p2 = vg_vector_1.Vector2D.sub(this.cp, x);\n        this.points.push(p1, p2);\n    }\n    YAxisPoints() {\n        let ang = this.angY;\n        let y = new vg_vector_1.Vector2D();\n        y.len = this.height / 2;\n        y.ang = ang;\n        let p1 = vg_vector_1.Vector2D.add(this.cp, y);\n        let p2 = vg_vector_1.Vector2D.sub(this.cp, y);\n        this.points.push(p1, p2);\n    }\n    // ----  public methods\n    drawAxis() {\n        this.XAxisPoints();\n        this.YAxisPoints();\n        for (let i = 0; i < this.points.length; i += 2) {\n            const p1 = this.points[i + 0];\n            const p2 = this.points[i + 1];\n            let { ctx } = this;\n            ctx.beginPath();\n            ctx.moveTo(p1.x, p2.x);\n            ctx.lineTo(p2.x, p2.y);\n            ctx.stroke();\n            ctx.closePath();\n        }\n    }\n}\nexports.default = Grid;\n\n\n//# sourceURL=webpack://Grid/./src/Grid.ts?");

/***/ }),

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nlet canvas = document.getElementById(\"canvas\");\nexports.canvas = canvas;\nlet ctx = canvas.getContext(\"2d\");\nexports.ctx = ctx;\nlet w = canvas.width = innerWidth;\nexports.w = w;\nlet h = canvas.height = innerHeight;\nexports.h = h;\n\n\n//# sourceURL=webpack://Grid/./src/globals.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Grid_1 = __webpack_require__(/*! ./Grid */ \"./src/Grid.ts\");\nconst globals_1 = __webpack_require__(/*! ./globals */ \"./src/globals.ts\");\nconst vg_vector_1 = __webpack_require__(/*! vg-vector */ \"./node_modules/vg-vector/dist/index.js\");\nconsole.log(\"vec2v\", vg_vector_1.Vector2D);\nlet grid = new Grid_1.default({\n    ctx: globals_1.ctx,\n    cp: new vg_vector_1.Vector2D(globals_1.w / 2, globals_1.h / 2),\n    height: 200,\n    width: 200,\n    unit: {\n        x: new vg_vector_1.Vector2D(30, 0),\n        y: new vg_vector_1.Vector2D(0, 30)\n    },\n});\ngrid.drawAxis();\nfunction render() {\n    globals_1.ctx.clearRect(0, 0, globals_1.w, globals_1.h);\n    requestAnimationFrame(render);\n}\nrender();\nexports.default = Grid_1.default;\n\n\n//# sourceURL=webpack://Grid/./src/index.ts?");

/***/ })

/******/ });