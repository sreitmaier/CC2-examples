class TeslaRoadster {
  constructor () {
    this._seats = 2
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

let myTesla = new TeslaRoadster()

myTesla.board('Felix')
myTesla.board('Tomas')
console.log(myTesla._passengers) // [ 'Felix', 'Garrit' ]

myTesla.board('Garrit')
console.log(myTesla._passengers) // [ 'Felix', 'Garrit' ]

myTesla._passengers.push('Garrit')
console.log(myTesla._passengers) // [ 'Felix', 'Tomas', 'Garrit' ]
