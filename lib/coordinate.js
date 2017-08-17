class Coordinate {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

  distanceFrom(other) {
  	let xProduct = Math.pow(other.x - this.x, 2);
  	let yProduct = Math.pow(other.y - this.y, 2);

  	return Math.sqrt(xProduct + yProduct);
    // TODO: actually caluculate distance. I think we need to use pythagoras' theorem?
  }
}

module.exports = Coordinate
