'use strict';

var greet = function(name) {
	if (name === undefined) {
		return 'Hello World!';
	}

	return 'Hello ' + name + '!';
};

module.exports = greet;