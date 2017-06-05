class Car {
  constructor (paramModel, paramSeats, paramEngine) {
    this._position = 0
    this.model = paramModel
    this._engine = paramEngine
    this._seats = paramSeats
    this._passengers = []
  }

  board (passenger) {
    if (this._passengers.length < this._seats) {
      this._passengers.push(passenger)
      return true
    }
    return false
  }
}

class Tesla extends Car {
  constructor (paramModel) {
    let seats
    if (paramModel === 'Roadster') {
      seats = 2
    } else if (paramModel === 'Model S') {
      seats = 5
    }
    super('Tesla ' + paramModel, seats, 'Electromotor')
  }
}

let oldTesla = new Tesla('Roadster')
let newTesla = new Tesla('Model S')

oldTesla.board('Felix')
oldTesla.board('Tomas')
oldTesla.board('Garrit')
console.log(oldTesla._passengers) // [ 'Felix', 'Garrit' ]

newTesla.board('Felix')
newTesla.board('Tomas')
newTesla.board('Garrit')
console.log(newTesla._passengers) // [ 'Felix', 'Garrit', 'Tomas' ]
