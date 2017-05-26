const DRONE_IDLE = 0;
const DRONE_PICKUP = 1;
const DRONE_DELIVER = 2;

var Drone = function(position, maxSpeed) {
	this.rotorRadius = 10;
	this.position = position;
	this.target = position;
	this.speed = maxSpeed;
	this.state = 0;
	this.cargo = null;

	this.deliver = function (cargo) {
		this.cargo = cargo;
	};

	this.stateMachine = function () {
		switch(this.state) {
		default:
		case DRONE_IDLE:
			if (this.cargo) {
				this.target = this.cargo.position;
				this.state = DRONE_PICKUP;
			}
			break;
		case DRONE_PICKUP:
			if (this.position.dist(this.target) < this.speed) {
				this.target = this.cargo.target;
				this.state = DRONE_DELIVER;
			}
			break;
		case DRONE_DELIVER:
			if (this.position.dist(this.target) < this.speed) {
				this.cargo = null;
				this.state = DRONE_IDLE;
			}
			break;
		}
	};

	this.availible = function () {
		return this.state === DRONE_IDLE;
	};

	this.drive = function () {
		var direction = p5.Vector.sub(this.target, this.position).normalize();
		this.position.add(direction.mult(this.speed));
	};

	this.draw = function () {
		if (this.state !== DRONE_IDLE) {
			this.drive();
		}

		if (this.state === DRONE_PICKUP) {
			translate(this.cargo.position.x, this.cargo.position.y);
			this.cargo.draw();
			translate(-this.cargo.position.x, -this.cargo.position.y);
		}

		if (this.state === DRONE_DELIVER) {
			translate(this.position.x, this.position.y);
			this.cargo.draw();
			translate(-this.position.x, -this.position.y);
		}

		stroke(0);
		fill(127);
		ellipse(this.position.x-this.rotorRadius/2, this.position.y-this.rotorRadius/2, this.rotorRadius,this.rotorRadius);
		ellipse(this.position.x+this.rotorRadius/2, this.position.y-this.rotorRadius/2, this.rotorRadius,this.rotorRadius);
		ellipse(this.position.x-this.rotorRadius/2, this.position.y+this.rotorRadius/2, this.rotorRadius,this.rotorRadius);
		ellipse(this.position.x+this.rotorRadius/2, this.position.y+this.rotorRadius/2, this.rotorRadius,this.rotorRadius);

		if (this.state === DRONE_IDLE) {
			fill('#00ff00');
		} else {
			fill('#ff0000');
		}
		noStroke();
		ellipse(this.position.x, this.position.y, this.rotorRadius/2,this.rotorRadius/2);

		this.stateMachine();
	};
};
