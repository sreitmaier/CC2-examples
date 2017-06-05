function endIt () {
  console.log('Time up')
  clearInterval(timer)
}

// !Achtung: Keine Klammern, da kein Aufruf/Call
setTimeout(endIt, 3000)
