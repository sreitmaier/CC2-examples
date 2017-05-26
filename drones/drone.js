var Drone = function(position, color, maxSpeed) {
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
