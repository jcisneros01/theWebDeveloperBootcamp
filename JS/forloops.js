// Print all numbers between -10 and 19
console.log("\nNumbers between -10 and 19: ");
for (var i = -10; i <= 19; i++) {
	console.log(i);
}


// Print all even numbers between 10 and 40
console.log("\nAll even numbers between 10 and 40");
for (var j = 10; j <= 40; j+=2) {
	console.log(j);
}

// Print all odd numbers between 300 and 333
console.log("\nAll odd numbers between 300 and 333");
for (var k = 300; k <= 333; k++) {
	if (k % 2 !== 0) {
		console.log(k);
	}
}

// Print all numbers divisible by 5 and 3 between 5 and 50
console.log("\nAll numbers divisible by 5 and 3 between 5 and 50");
for (var l = 5; l <= 50;l++) {
	if (l % 3 == 0 && l % 5 == 0) {
		console.log(l);
	}
}