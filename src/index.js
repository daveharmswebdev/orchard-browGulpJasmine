"use strict";

var Tree = require('../src/tree');
var $ = require('jQuery');
var heightBranch = require('../views/heightBranch.jade');

$(function() {
	var pearTree = new Tree(4);
	var oakTree = new Tree(8);
	var maxLoops = 30;
	var counter = 0;

	function showAndGrow() {
		$('.display').prepend(heightBranch({tree: 'Oak', height: oakTree.getHeight(), branches: oakTree.getBranches()}));
		$('.display').prepend(heightBranch({tree: 'Pear', height: pearTree.getHeight(), branches: pearTree.getBranches()}));
		$('.display').prepend('<p></p>');
		pearTree.grow(6);
		oakTree.grow(8);
		if (counter%10 === 0) {
			pearTree.trim(25);
			oakTree.trim(50);
			$('.display').prepend('<h2>***TRIM***</h2>');
		}
	}

	function printX(x) {
		console.log(x);
	}

	(function next() {
		if (counter++ >= maxLoops) return;

		setTimeout(function() {
			showAndGrow();
			next();
		}, 1000);
	})();

});



