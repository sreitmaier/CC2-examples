class Car {
  constructor (paramModel, paramEngine) {
    this.model = paramModel
    this._engine = paramEngine
    this._position = 0
  }

  drive () {
    console.log('frummmm')
    this._position++
  }
}

class Tesla extends Car {
  constructor (paramModel) {
    super('Tesla ' + paramModel, 'Electromotor')
  }

  drive () {
    console.log('weeeeeee')
    super._position++
  }
}

let myTesla = new Tesla('Roadster')

myTesla.drive() // weeeeeee
console.log(myTesla._position) //
