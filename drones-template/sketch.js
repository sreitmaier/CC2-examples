var vehicles = [];
var vehicleCount = 6;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < vehicleCount; i++) {
		vehicles[i] = new Drone(createVector(windowWidth/2, windowHeight/2), color('hsl( ' + Math.floor(i/vehicleCount*160+200) + ', 100%, 50%)'), 2);
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
	var availableVehicles = [];
	for (var vehicle of vehicles) {
		if (vehicle.available) {
			availableVehicles.push(vehicle);
		}
	}

	if (availableVehicles.length) {
		var target = createVector(mouseX, mouseY);
		var closestVehicle;
		for (var vehicle of availableVehicles) {
			if (!closestVehicle) {
				closestVehicle = vehicle;
			} else {
				if (closestVehicle.position.dist(target) > vehicle.position.dist(target)) {
					closestVehicle = vehicle;
				}
			}
		}
		closestVehicle.driveTo(target);
	} else {
		console.log('No vehicle available');
	}
}
