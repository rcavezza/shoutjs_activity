const Coordinate = require('./coordinate')

class Person {
	constructor(x, y, vol) {
    console.log('new feature branch here')
		this.coord = Coordinate(x,y);
		this.volume = vol;
	}
}

module.exports = Person
