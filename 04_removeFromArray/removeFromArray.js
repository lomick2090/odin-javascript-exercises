function searchArray (array, arg) {
    for (let i = 0; i < array.length; i++) {
        
        if (array[i] === arg) {
            array.splice(i , 1);
        
        }

    }
    return array;
}

const removeFromArray = function() {
    const args = Array.from(arguments);

    for (let i = 1; i < args.length ; i++) {
        var array = searchArray(args[0], args[i]);

    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
