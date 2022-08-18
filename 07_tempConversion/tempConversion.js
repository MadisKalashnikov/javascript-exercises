const ftoc = function(temp) {
  let temp1 = temp - 32
  let calc = 5 / 9
  return parseFloat((temp1 * calc).toFixed(1))
};

const ctof = function(temp) {
  let temp1 = temp * (9 / 5)
  let calc = temp1 + 32
  return parseFloat(calc.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
