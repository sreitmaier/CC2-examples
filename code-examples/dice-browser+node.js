function throwDice() {
	return Math.floor(Math.random() * (6)) + 1;
}

var results = [0,0,0,0,0,0];

var iterations = 10000000;

for (var i = 0; i < iterations; i++) {
	results[throwDice()-1]++;
}

for (var i = 0; i < results.length; i++) {
	var percentage = results[i] / iterations * 100;
	console.log( (i+1) + ': ' + percentage + '%');
}
