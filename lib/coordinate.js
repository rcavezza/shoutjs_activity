class Coordinate {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

  distanceFrom(other) {
  	let xProduct = Math.pow(other.x - this.x, 2);
  	let yProduct = Math.pow(other.y - this.y, 2);

  	return Math.sqrt(xProduct + yProduct);
  }
}

module.exports = Coordinate
