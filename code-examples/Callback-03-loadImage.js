function setup () {
  loadImage('example.png', function (img) {
    console.log('Bild geladen')
    image(img, 0, 0)
  })
}
