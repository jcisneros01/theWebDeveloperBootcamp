console.log("Testing printReverse:");

var numArray = [1,2,3];
function printReverse(array) {
	for (var i = array.length-1; i >= 0; i--) {
		console.log(array[i]);
	}
}

printReverse(numArray);

var testArray1 = [1,1,1,1];
var testArray2 = [2,1,1,1];
var testArray3 = ["a", "b", "p"];
var testArray4 = ["b", "b", "b"];

console.log("\nTesting isUniform:");

function isUniform(array) {
	var testVar = array[0];
	for(var i = 1; i < array.length; i++) {
		if (array[i] !== testVar) {
			return false;
		}
	}
	return true;
}

function testArrayFunction() {
	console.log(isUniform(testArray1));
	console.log(isUniform(testArray2));
	console.log(isUniform(testArray3));
	console.log(isUniform(testArray4));
}

testArrayFunction();

console.log("\nTesting sumArray:");
var nums1 = [1,2,3];
var nums2 = [10,3,10,4];
var nums3 = [-5, 100];


function sumArray(array) {
	var sum = 0;
	for (var i = 0; i< array.length; i++) {
		sum+= array[i];
	}
	return sum;
}

function testArrayFunction2() {
	console.log(sumArray(nums1));
	console.log(sumArray(nums2));
	console.log(sumArray(nums3));
}

testArrayFunction2();

console.log("\nTesting max:");
var numbers1 = [1,2,3];
var numbers2 = [10,3,10,4];
var numbers3 = [-5, 100];

function max(array) {
	var maxNum = array[0];
	for(var i = 1; i < array.length; i++) {
		if (array[i] > maxNum ) {
			maxNum = array[i];
		}
	}
	return maxNum;
}

function testArrayFunction3() {
	console.log(max(numbers1));
	console.log(max(numbers2));
	console.log(max(numbers3));
}

testArrayFunction3();

