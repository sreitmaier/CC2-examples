console.log('A')

var callLater = function () {
  console.log('B') // this is executed in line 4
}

console.log('C')

callLater()

// Result:
// A
// C
// B
