// Manchmal wollen wir nicht jedes Verhalten der Elternklasse übernehmen, also können wir dies überschreiben.
class Car {
  constructor (paramEngine) {
    this._engine = paramEngine
  }

  drive () {
    console.log('frummmm')
  }
}

class Tesla extends Car {
  constructor () {
    super('Electromotor')
  }

  // Obwohl die Methode `drive` schon in der Elternklasse definiert wurde, könnne wir diese einfach überschreiben
  drive () {
    console.log('weeeeeee')
  }
}

let myCar = new Car('Ottomotor')
let myTesla = new Tesla()

myCar.drive() // frummmm
myTesla.drive() // weeeeeee
