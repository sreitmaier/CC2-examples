// Privacy oder auch Visibility hilft bei OOP Abhängigkeiten und dadurch Fehlerquellen zu minimieren
class TeslaRoadster {
  constructor () {
    // Wir definieren Attribute mit einem Unterstrich "_", um sie als privat zu kennzeichnen
    this._seats = 2 // Ein Roadster hat bloß 2 Siztplätze
    this._passengers = [] // ...also sollte dieser Array nie mehr als 2 Elemente enthalten
  }

  // indem wir eine Methode für das Einsteigen deklarieren, können wir die begrenzte Sitzplatzanzahl einhalten
  board (passenger) {
    if (this._passengers.length < this._seats) {
      this._passengers.push(passenger) // nur wenn noch Platz ist, wird eingestiegen
      return true
    }
    return false
  }
}

let myTesla = new TeslaRoadster()

// Zwei Passagiere steigen ein
myTesla.board('Felix')
myTesla.board('Tomas')
console.log(myTesla._passengers) // [ 'Felix', 'Tomas' ]

// Roadster ist voll. Garrit muss laufen ✅
myTesla.board('Garrit')
console.log(myTesla._passengers) // [ 'Felix', 'Tomas' ]

 // 😈 wir greifen von "außen" auf das "private" Attribut zu. Das sollen wir nicht, denn jetzt haben wir drei Passagiere in den Roadster gequetscht
myTesla._passengers.push('Garrit')
console.log(myTesla._passengers) // [ 'Felix', 'Tomas', 'Garrit' ]
