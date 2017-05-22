var Car = function(position, color, maxSpeed) {
	this.position = position;
	this.target = position;
	this.color = color;
	this.speed = maxSpeed;
	this.available = true;
	this.driveTo = function (target) {
		this.target = target;
		this.available = false;
	};
	this.drive = function () {
		if (this.target && this.position.dist(this.target) >= this.speed) {
			var direction = p5.Vector.sub(this.target, this.position).normalize();
			this.position.add(direction.mult(this.speed));
		} else {
			if (!this.available) {
				this.available = true;
			}
		}
	};
	this.draw = function () {
		this.drive();
		noStroke();
		fill(this.color);
		ellipse(this.position.x, this.position.y, 20,20);
	};
};

var vehicles = [];
var vehicleCount = 6;

function randomPosition() {
	return createVector(Math.random()*windowWidth, Math.random()*windowHeight);
}

function randomColorFromHueRange(begin, end) {
	var hue;
	if (begin < end) {
		hue = random(end-begin)+begin;
	} else {
		hue = (random(360-begin+end)+begin) % 360;
	}
	return color('hsl( ' + Math.floor(hue) + ', 100%, 50%)');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < vehicleCount; i++) {
		vehicles[i] = new Car(randomPosition(), color('hsl( ' + Math.floor(i/vehicleCount*160+200) + ', 100%, 50%)'), random(3)+1);
	}
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
	var availableVehicles = vehicles.filter((vehicle) => vehicle.available);
	if (availableVehicles.length) {
		var target = createVector(mouseX, mouseY);
		availableVehicles.reduce((closestVehicle, vehicle) => (!closestVehicle || closestVehicle.position.dist(target) > vehicle.position.dist(target)) ? vehicle : closestVehicle).driveTo(target);
	} else {
		console.log('Nothing available');
	}
}
