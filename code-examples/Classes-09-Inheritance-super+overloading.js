//
class Car {
  constructor (paramModel, paramEngine) {
    this.model = paramModel
    this._engine = paramEngine
    this._position = 0
  }

  drive () {
    console.log('frummmm')
    this.move(1)
  }

  move (distance) {
    this._position += distance
  }
}

class Tesla extends Car {
  constructor (paramModel) {
    super('Tesla ' + paramModel, 'Electromotor')
  }

  drive () {
    console.log('weeeeeee')

    super.move(1) // auch eine Möglichkeit super zu nutzen, ich rufe `move` in `Car` auf

    // Das geht nicht, denn `super` bezieht sich auf Methoden
    // super._position++

    // Das wollen wir vermeiden, denn dieses Attribut ist privat
    // this._position++
  }
}

let myTesla = new Tesla('Roadster')

myTesla.drive() // weeeeeee
console.log(myTesla._position) //
