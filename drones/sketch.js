var vehicles = []
var jobs = []
var newJob
var jobState = 0
var vehicleCount = 6

function setup () {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)

  for (var i = 0; i < vehicleCount; i++) {
    vehicles[i] = new Drone(createVector(windowWidth / 4 * (1 + 2 * (i % 2)), windowHeight / 2), 2)
  }

  newJob = new Package()
}

function draw () {
  handleJobs()

  background(255)

  for (var vehicle of vehicles) {
    vehicle.draw()
  }

  if (jobState) {
    stroke(85)
    line(newJob.position.x, newJob.position.y, mouseX, mouseY)

    translate(newJob.position.x, newJob.position.y)
    newJob.draw()
    translate(-newJob.position.x, -newJob.position.y)

    stroke(0)
    noFill()
    ellipse(mouseX, mouseY, 15, 15)
    line(mouseX - 10, mouseY, mouseX + 10, mouseY)
    line(mouseX, mouseY - 10, mouseX, mouseY + 10)
  } else {
    translate(mouseX, mouseY)
    newJob.draw()
    translate(-mouseX, -mouseY)
  }
}

function handleJobs () {
  while (jobs.length) {
    var availableVehicles = vehicles.filter((vehicle) => vehicle.availible())
    if (availableVehicles.length) {
      var job = jobs.pop()
      availableVehicles.reduce((closestVehicle, vehicle) => (!closestVehicle || closestVehicle.position.dist(job.position) > vehicle.position.dist(job.position)) ? vehicle : closestVehicle).deliver(job)
    } else {
      return
    }
  }
}

function mouseClicked () {
  switch (jobState) {
    case 0: // click new package
      newJob.position = createVector(mouseX, mouseY)
      jobState = 1
      break
    case 1:
      newJob.target = createVector(mouseX, mouseY)
      jobs.push(newJob)
      jobState = 0
      newJob = new Package()
      break
  }
}
