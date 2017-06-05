var timer = setInterval(function () {
  console.log('Tik')
}, 500)

function endIt () {
  console.log('Time up')
  clearInterval(timer)
}

setTimeout(endIt, 5000) // !Aachtung: Keine Klammern, da kein Aufruf/Call
