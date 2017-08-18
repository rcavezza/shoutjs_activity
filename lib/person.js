const Coordinate = require('./coordinate')

class Person {
  constructor(name,vol,x,y){
    this.name=name
    this.volume=vol
    this.coordinate=new Coordinate(x,y)
  }

  getName(){
    return this.name
  }

  getVolume(){
    return this.volume
  }

}

module.exports=Person