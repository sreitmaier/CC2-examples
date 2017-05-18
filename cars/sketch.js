var Car = function(position, color, maxSpeed) {
	this.position = position;
	this.target = position;
	this.color = color;
	this.speed = maxSpeed;
	this.driveTo = function (target) {
		this.target = target;
	};
	this.drive = function () {
		if (this.target && this.position.dist(this.target) > this. speed) {
			var direction = p5.Vector.sub(this.target, this.position).normalize();
			this.position.add(direction.mult(this.speed));
		}
	};
	this.draw = function () {
		this.drive();
		fill(this.color);
		ellipse(this.position.x, this.position.y, 20,20);
	};
}

var vehicles = [];
var target;
var idle = 0;

function randomPosition() {
	return createVector(Math.random()*windowWidth, Math.random()*windowHeight)
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	vehicles[0] = new Car(randomPosition(), '#ff0000', 3);
	vehicles[1] = new Car(randomPosition(), '#ff00ff', 5);
	vehicles[2] = new Car(randomPosition(), '#ffff00', 10);
	vehicles[3] = new Car(randomPosition(), '#00ff00', 10);
}

function draw() {
	background(255);
	// rectMode
	for (var vehicle of vehicles) {
		// console.log(vehicle);
		vehicle.draw();
	}
}

function mouseClicked() {
	idle++;
	if (idle >= vehicles.length) idle = 0;
	vehicles[idle].driveTo(createVector(mouseX, mouseY))
}
