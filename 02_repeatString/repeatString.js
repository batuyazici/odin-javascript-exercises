const repeatString = function (text, count) {
  let concatString = "";
  if (count >= 0) {
    for (let i = count; i > 0; i--) {
      concatString += text;
    }
    return concatString;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
