const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return (num1 > num2) ? num1 - num2 : num2 - num1;
};

const sum = function(numberArray) {
  return numberArray.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(numberArray) {
  return numberArray.reduce((acc,cur) => acc * cur);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(facNumber) {
  let facResult = 1;
	 while(facNumber > 0) {
    facResult *= facNumber;
    facNumber--;
   }
   return facResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
