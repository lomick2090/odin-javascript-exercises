const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {return 'OOPS'};
    let array = [0,1,1];
    for (i = 3; i <= num; i++){
        array[i] = array[(i-1)] + array[(i-2)]
    }
    return array[num];
};

// Do not edit below this line
module.exports = fibonacci;
