"use strict";

var Plant = function(cm) {
	this.height = cm;
};

Plant.prototype.increaseHeight = function(cm) {
	this.height += cm || 0;
};
Plant.prototype.decreaseHeight = function(cm) {
	this.height -= cm;
};
Plant.prototype.getHeight = function() {
	return `${this.height} cm`;
};

module.exports = Plant;