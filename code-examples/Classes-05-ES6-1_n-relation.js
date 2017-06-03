class Engine {
  constructor (paramType, paramHP) {
    this.type = paramType
    this.hp = paramHP
  }
}

class Car {
  constructor (paramModel, paramEngine) {
    this.wheels = 4
    this.model = paramModel
    this.engine = paramEngine
    this.passengers = []
  }

  board (passenger) {
    this.passengers.push(passenger)
  }

  drive () { }
  refuel () { }
}

class Passenger {
  constructor (paramName, paramWeight, paramDestination) {
    this.name = paramName
    this.weight = paramWeight
    this.destination = paramDestination
  }
}

var tesla = new Car('Tesla Model S', new Engine('electro', 463))
var felix = new Passenger('Felix', 70, 'Mediencampus Dieburg')
tesla.board(felix)
