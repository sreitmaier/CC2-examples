function endIt () {
  console.log('Time up')
}

setTimeout(endIt, 3000) // endIt ist eine Callback Funktion
// !Achtung: Keine Klammern, da kein Aufruf/Call
