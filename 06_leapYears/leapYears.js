const leapYears = function(year) {
	// if year divisible by 4
	if (year % 4 === 0) {
		// if divisible by four and 100
		if (year % 100 === 0) {
			// if divisiblie by four and hundred and 400
			if (year % 400 === 0) {
				return true
			}
			return false
		}
		return true
	// if not divisble by 4
	} else if (year % 4 !== 0) {
		return false
	}
};

// Do not edit below this line
module.exports = leapYears;
