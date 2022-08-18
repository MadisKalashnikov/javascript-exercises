const sumAll = function(n1, n2) {
	// initialize result as 0
	let result = 0;
	// if numbers are smaller than 0 or not numbers
	if (typeof n1 !== "number" || typeof n2 !== "number") {
		return "ERROR"
	} else if (n1 < 0 || n2 < 0) {
		return "ERROR"
	};
	// if n1 is bigger than n2
	if (n1 > n2) {
		while (n1 >= n2) {
			result += n1;
			n1--;
		}
	// if n1 is smaller than n2
	} else if (n1 < n2) {
		while (n1 <= n2) {
			result += n1;
			n1++;
		}
	}
	
	return result;
};

// Do not edit below this line
module.exports = sumAll;
