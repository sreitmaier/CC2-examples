function Car (paramColor, paramEngine) {
  this.wheels = 4
  this.color = paramEngine
  this.engine = paramEngine
  this.drive = function () {
    console.log('Wrummm')
  }
  this.refuel = function () {
    console.log('-$$$')
  }
}

var motor = 'ElectroMotor'
var auto = new Car('#ff0000', motor)
