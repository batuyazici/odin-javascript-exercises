const palindromes = function (text) {
    text = text.replace(/\W/g, '').toLowerCase();
    let revText = text.split('').reverse().join('');
    return text === revText;
    
};

// Do not edit below this line
module.exports = palindromes;
