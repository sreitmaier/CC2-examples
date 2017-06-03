class Car {
  constructor (paramModel, paramEngine) {
    this.wheels = 4
    this.model = paramModel
    this.engine = paramEngine
  }

  drive () { }
  refuel () { }
}

class Engine {
  constructor (paramType, paramHP) {
    this.type = paramType
    this.hp = paramHP
  }
}

var electroMotor = new Engine('electro', 463)
var tesla = new Car('Tesla Model S', electroMotor)

var combustion = new Engine('4 cylinder combustion', 20)
var ford = new Car('Tesla Model S', combustion)
