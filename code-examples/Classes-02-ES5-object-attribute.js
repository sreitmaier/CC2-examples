function Car (paramModel, paramEngine) {
  this.wheels = 4
  this.model = paramModel
  this.engine = paramEngine
  this.drive = function () { }
  this.refuel = function () { }
}

var electroMotor = {type: 'electro', horsepower: 463}
var tesla = new Car('Tesla Model S', electroMotor)

var combustion = {type: '4 cylinder combustion', horsepower: 20}
var ford = new Car('Tesla Model S', combustion)
