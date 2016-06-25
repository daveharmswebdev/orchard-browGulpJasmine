"use strict";

var Plant = require('../src/plant');

var Tree = function(cm) {
	this.height = cm || this.height;
	this.branches = Math.floor(cm/10);

};
Tree.prototype = new Plant();
Tree.prototype.trim = function(cm) {
	this.decreaseHeight(cm);
	this.branches = Math.floor(this.height/10);
};
Tree.prototype.grow = function(cm) {
	this.increaseHeight(cm);
	this.branches = Math.floor(this.height/10);
};
Tree.prototype.getBranches = function() {
	return this.branches;
}
module.exports = Tree;