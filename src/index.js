"use strict";

var Tree = require('../src/tree');
var $ = require('jQuery');

$(function() {
	var pearTree = new Tree(4);
	var oakTree = new Tree(8);
	var maxLoops = 30;
	var counter = 0;

	function showAndGrow() {
		console.log(`Pear tree is now ${pearTree.getHeight()}cm tall, and has ${pearTree.getBranches()} branches`);
		console.log(`Oak tree is now ${oakTree.getHeight()}cm tall, and has ${oakTree.getBranches()} branches`);
		pearTree.grow(6);
		oakTree.grow(8);
	}

	function printX(x) {
		console.log(x);
	}

	(function next() {
		if (counter++ >= maxLoops) return;

		setTimeout(function() {
			console.log(counter%10);
			showAndGrow();
			next();
		}, 100);
	})();

});



