const DRONE_IDLE = 0
const DRONE_PICKUP = 1
const DRONE_DELIVER = 2

class Drone {
  constructor (port, maxSpeed) {
    this.rotorRadius = 10
    this.port = port
    this.position = port.copy()
    this.target = port.copy()
    this.speed = maxSpeed
    this.state = DRONE_IDLE
    this.cargo = null
  }

  stateMachine () {
    switch (this.state) {
      default:
      case DRONE_IDLE:
        if (this.cargo) {
          this.target = this.cargo.position
          this.state = DRONE_PICKUP
        }
        break
      case DRONE_PICKUP:
        if (this.position.dist(this.target) < this.speed) {
          this.target = this.cargo.target
          this.state = DRONE_DELIVER
        }
        break
      case DRONE_DELIVER:
        if (this.position.dist(this.target) < this.speed) {
          this.target = this.port
          this.cargo = null
          this.state = DRONE_IDLE
        }
        break
    }
  }
}
