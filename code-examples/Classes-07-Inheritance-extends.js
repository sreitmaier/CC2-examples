class Car {
  constructor (paramEngine) {
    this.engine = paramEngine
  }

  drive () {
    console.log('frummmm')
  }
}

class Tesla extends Car {
  constructor () {
    super('Electromotor')
  }
}

let myTesla = new Tesla()
myTesla.drive() // frummmm
console.log(myTesla.engine) // Electromotor
