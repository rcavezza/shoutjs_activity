const Coordinate = require('./coordinate')

class Person {
	constructor(x, y, vol) {
		this.coord = Coordinate(x,y);
		this.volume = vol;
	}
}

module.exports = Person
