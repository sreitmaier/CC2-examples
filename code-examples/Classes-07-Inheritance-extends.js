class Car {
  constructor (paramEngine) {
    this.engine = paramEngine
  }

  drive () {
    console.log('frummmm')
  }
}

// Mit dem kleinen Wörtchen `extends` "erbt" die Klasse `Tesla` alle Attribute und Methoden der Klasse `Car`
class Tesla extends Car {
  constructor () {
    // Jeder Tesla hat einen Elektromotor, also reicht es dies einmalig zu definieren
    super('Electromotor') // super() ruft die Methode der "Superclass" / Elternklasse auf. In diesem Fall den `constructor` von `Car` in Zeile 2
  }
}

// Wenn wir nun ein Objekt der Klasse Tesla instanzieren, hat es eine Methode `drive` und als `engine` den "Elektromotor"
let myTesla = new Tesla()
myTesla.drive() // frummmm
console.log(myTesla.engine) // Electromotor
