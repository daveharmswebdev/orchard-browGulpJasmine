"use strict";

var Plant = require('../src/plant');

var Tree = function(cm) {
	this.height = cm || this.height;
	this.branches = Math.floor(cm/10);

};
Tree.prototype = new Plant();
Tree.prototype.trim = function(cm) {
	this.decreaseHeight(cm);
};
Tree.prototype.grow = function(cm) {
	this.increaseHeight(cm);
};

module.exports = Tree;