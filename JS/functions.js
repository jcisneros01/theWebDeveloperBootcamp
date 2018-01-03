function isEven(num) {
	return num % 2 == 0;
}

function factorial(num) {
	var product = 1;
	while ( num !== 0) {
		product*= num;
		num--;
	}
	return product;
}

function kebabToSnake(str) {
	return str.replace("-", "_");
}

console.log(kebabToSnake("hello-world"));
