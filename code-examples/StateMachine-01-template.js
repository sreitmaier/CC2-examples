// Define all your state before
// Gives an overview and the id can be easily switched
const DRONE_IDLE = 0
const DRONE_PICKUP = 1
const DRONE_DELIVER = 2

class Drone {
  constructor (port, maxSpeed) {
    this.state = DRONE_IDLE
    // Start state
    // ...
  }

  changeEvent () {
    // Use a switch to check for the State
    switch (this.state) {
      default:
      case DRONE_IDLE:
        // do something according to state
        break
      case DRONE_PICKUP:
        // do something according to state
        break
      case DRONE_DELIVER:
        // do something according to state
        break
    }
  }
}
