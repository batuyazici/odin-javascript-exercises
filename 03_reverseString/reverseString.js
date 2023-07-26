const reverseString = function(text) {
    let chars = text.split('');
    let reverseText = '';
    
    for(let i = chars.length - 1; i >= 0; i--)  {
        reverseText += chars[i];
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
