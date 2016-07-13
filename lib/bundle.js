/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	const gameCanvas = document.getElementById("game-canvas");
	const world = boxbox.createWorld(gameCanvas);
	
	const ash = world.createEntity({
	  name: "Ash",
	  type: "static",
	  image: "assets/images/ash-sprite-throw.png",
	  spriteSheet: true,
	  spriteWidth: 80,
	  spriteHeight: 51,
	  x: 1,
	  y: 8.5,
	});
	
	const ground = world.createEntity({
	  name: "Ground",
	  type: "static",
	  shape: "square",
	  width: 30,
	  height: 0.5,
	  y: 10,
	
	});


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map