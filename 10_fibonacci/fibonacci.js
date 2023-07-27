const fibonacci = function(number) {
    if(+number > 0) {
    let previousNum = 0;
    let fibonacciSum = 1;
    let temp;
    for(let i = +number - 1; i > 0; i--) {
        temp = fibonacciSum;
        fibonacciSum += previousNum;
        previousNum = temp;
    }
    return fibonacciSum;
} else {
    return "OOPS";
}
};

// Do not edit below this line
module.exports = fibonacci;
