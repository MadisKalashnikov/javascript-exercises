const reverseString = function(string) {
	const arr = string.split("")
	const newArr = []
	for (let i = string.length - 1; i >= 0; i--) {
		newArr.push(arr[i])
	}
	return newArr.join("")
};

// Do not edit below this line
module.exports = reverseString;
