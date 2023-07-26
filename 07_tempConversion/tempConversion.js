const convertToCelsius = function(TempFahr) {
  return Math.round(((TempFahr - 32) * (5/9)) * 10) / 10; 
};

const convertToFahrenheit = function(TempCelc) {
  return Math.round(((TempCelc * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
