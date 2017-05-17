var Car = function(position, color, maxSpeed) {
	this.target;
	this.position = position;
	this.color = color;
	this.speed = maxSpeed;
	this.driveTo = function (target) {
		this.target = target;
	},
	this.drive = function () {
		if (this.position.dist(this.target) > this. speed) {
			var direction = p5.Vector.sub(this.target, this.position).normalize();
			this.position.add(direction.mult(this.speed));
		}
	},
	this.draw = function () {
		this.drive();
		fill(this.color);
		ellipse(this.position.x, this.position.y, 20,20);
	}
}

var vehicles = [];
var target;

function setup() {
	createCanvas(displayHeight, displayWidth);
	vehicles[0] = new Car(createVector(displayHeight/2, displayWidth/2), '#ff0000', 3);
	vehicles[0].driveTo(p5.Vector.random2D().normalize().mult(min([displayHeight, displayWidth])));
	// vehicles[1] = new Car('#ff00ff', 5);
	// vehicles[2] = new Car('#ffff00', 10);
}

function draw() {
	background(255);
	for (var vehicle of vehicles) {
		// console.log(vehicle);
		vehicle.draw();
	}
}

function mouseClicked() {
	vehicles[0].driveTo(createVector(mouseX, mouseY))
}
