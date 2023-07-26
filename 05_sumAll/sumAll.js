const sumAll = function(firstRange, secondRange) {
    let finalSum = 0;
    let maxRange;
    let minRange;
    if(typeof firstRange != 'number' ||typeof secondRange != 'number' || firstRange < 0 || secondRange < 0) {
        return 'ERROR';
    }
    if(firstRange > secondRange) {
        maxRange = firstRange;
        minRange = secondRange;
    } else {
        maxRange = secondRange;
        minRange = firstRange;
    }
    for(let i= maxRange; i >= minRange; i--) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
