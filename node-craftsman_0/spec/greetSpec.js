'use strict';

var greet = require('../src/greet');

describe('greet', function() {
	it('should greet the name', function() {
		expect(greet('Joe')).toEqual('Hello Joe!');
	})

	it('should output "Hello World!" if no name is given', function() {
		expect(greet()).toEqual('Hello World!');
	});
});