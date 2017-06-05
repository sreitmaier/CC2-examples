class Car {
  constructor (paramModel, paramEngine) {
    this.model = paramModel
    this._engine = paramEngine
    this._position = 0
  }

  drive () {
    console.log('frummmm')
  }
}

class Tesla extends Car {
  constructor (paramModel) {
    super('Tesla ' + paramModel, 'Electromotor')
  }

  drive () {
    console.log('weeeeeee')
  }
}

let myTesla = new Tesla('Roadster')

myTesla.drive() // weeeeeee
