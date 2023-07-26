const removeFromArray = function(array, ...removeElem) {
    let newArray = array.filter(element => !(removeElem.includes(element)));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
