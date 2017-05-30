class Package {
  constructor (position) {
    this.position = createVector(0, 0)
    this.target = createVector(0, 0)
    this.color = '#DFCD7B'
  }

  draw () {
    stroke(85)
    fill(this.color)
    rect(0, 0, 20, 20, 2)
  }
}
