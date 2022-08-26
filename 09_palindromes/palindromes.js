const palindromes = function (string) {
    let workingString;
    let workingLength;
    workingString = string.replace(/[^a-zA-z0-9]/g, '').
        replace(/[\]\[]/g, '').toLowerCase();
    if (workingString.length % 2 != 0) {
        workingLength = workingString.length -1
    }
    for (let i = 0; i < workingLength/2; i++) {
        if (workingString[i] != workingString
            [workingString.length - 1 - i]) {
                return false;
            }
    }
    return true;
};

// string = 'asdfas;c9aj033nv;3-3493-49-58===[]()dsad  ada33';
// workingString = string.replace(/[^a-zA-z0-9]/g, '').replace(/[\]\[]/g, '');
// console.log (workingString);
// console.log(workingString[0]);
// console.log(workingString[1]);
// console.log(workingString[workingString.length]);

// Do not edit below this line
module.exports = palindromes;
