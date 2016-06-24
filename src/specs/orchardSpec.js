"use strict";

var Plant = require('../plant');
var Tree = require('../tree');

describe('specs for orchard.js', function() {

	it('There should be a Plant function defined', function() {
		expect(Plant).toBeDefined();
	});
	it('There should be a tree function definend', function() {
		expect(Tree).toBeDefined();
	});
	it('Plant.prototype.increaseHeight should be defined', function() {
		let testPlant = new Plant();
		expect(testPlant.increaseHeight).toBeDefined();
	});
	it('Plant.prototype.decreaseHeight should be defined', function() {
		let testPlant = new Plant();
		expect(testPlant.decreaseHeight).toBeDefined();
	});
	it('There should be a height property on plant', function() {
		let testPlant = new Plant(20);
		expect(testPlant.height).toEqual(20);
	});
	it('There should be a function named grow on the prototype of Tree', function() {
		expect(Tree.prototype.grow).toBeDefined();
	});
	it('There should be a function named trim on the prototype of Tree', function() {
		expect(Tree.prototype.trim).toBeDefined();
	});
	it('Invoking trim on Tree reduces height of tree by the amount of passed in integer', function() {
		var testTree = new Tree(30);
		testTree.trim(5);
		expect(testTree.height).toBe(25);
	});
	it('Invoking grow on Tree increases height of tree equal to the integer passed in.', function() {
		var testTree = new Tree(10);
		testTree.grow(5);
		expect(testTree.height).toBe(15);
	});
	it('trees have branches -- a branch variable', function() {
		let testTree = new Tree();
		expect(testTree.branches).toBeDefined();
	});
	it('tree branches should increase by one branch for every 10 cm', function() {
		let testTree = new Tree(51);
		expect(testTree.branches).toEqual(5);
	});
	
});