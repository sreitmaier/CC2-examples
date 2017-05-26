var Package = function(position) {
	this.position = createVector(0,0);
	this.target = createVector(0,0);
	this.color = '#DFCD7B';
	this.draw = function () {
		stroke(85);
		fill(this.color);
		rect(0, 0, 20, 20, 2);
	};
};
