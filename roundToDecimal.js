
function roundToDecimal(value, decimal) {
  var factor = Math.pow(10, decimal);
  return Math.round(value * factor) / factor;
}

module.exports = roundToDecimal;
