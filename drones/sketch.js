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
	var availableVehicles = vehicles.filter((vehicle) => vehicle.available);
	if (availableVehicles.length) {
		var target = createVector(mouseX, mouseY);
		availableVehicles.reduce((closestVehicle, vehicle) => (!closestVehicle || closestVehicle.position.dist(target) > vehicle.position.dist(target)) ? vehicle : closestVehicle).driveTo(target);
	} else {
		console.log('Nothing available');
	}
}
