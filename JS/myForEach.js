console.log("\nTesting sumArray:");
var nums1 = [1,2,3];

function print(element) {
	console.log(element);
}


function myForEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}


myForEach(nums1, print);

// Array Function prototype
Array.prototype.myForEach = function(func) {
	for (var i  = 0; i < this.length; i++) {
		func(this[i]);
	}
};

nums1.myForEach(function(num) {
	console.log(num);
});