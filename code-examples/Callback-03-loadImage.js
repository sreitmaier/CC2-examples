function setup () {
  loadImage('example.png', function (img) { // hier nutzen wir einen Callback, welcher ausgeführt, wenn das Bild fertig geladen ist
    console.log('Bild geladen')
    image(img, 0, 0)
  })

 // code hier wird direkt ausgeführt, egal, ob das Bild geladen ist oder nicht
}
