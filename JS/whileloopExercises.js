// Print all numbers between -10 and 19
console.log("\nNumbers between -10 and 19: ");
var i = -10
while ( i <= 19) {
	console.log(i);
	i++;
}

// Print all even numbers between 10 and 40
console.log("\nAll even numbers between 10 and 40");
var j = 10
while (j <= 40) {
	console.log(j);
	j+=2;
}

// Print all odd numbers between 300 and 333
console.log("\nAll odd numbers between 300 and 333");
var k = 300
while (k <= 333) {
	if (k % 2 !== 0) {
		console.log(k);
	}
	k++;
}

// Print all numbers divisible by 5 and 3 between 5 and 50
console.log("\nAll numbers divisible by 5 and 3 between 5 and 50");
var l = 5
while (l <= 50) {
	if (l % 3 == 0 && l % 5 == 0) {
		console.log(l);
	}
	l++;
}