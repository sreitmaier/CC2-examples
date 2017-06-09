var timer = setInterval(function () { // hier definieren wir direkt den Callback
  console.log('Tik')
}, 500)

function endIt () {
  console.log('Time up')
  clearInterval(timer) // setInterval gibt eine Id zurück, mit der wir den Intervall dann mit clearInterval abbrechen
}

setTimeout(endIt, 5000) // !Aachtung: Keine Klammern, da kein Aufruf/Call
