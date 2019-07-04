var Vehicle = function() {};

Vehicle.prototype.drive = function() {
	console.log('vroom');
}

var Car = function() {};

Car.prototype = new Vehicle();

Car.prototype.honk = function() {
	console.log('honk honk');
}

var myCar = new Car();

myCar.honk();
myCar.drive();

console.log(Car.prototype);