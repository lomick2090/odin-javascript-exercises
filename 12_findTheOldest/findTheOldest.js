const findTheOldest = function(people) {
    var currentYear= new Date().getFullYear();

    const sortedPeeps = people.sort(function(a, b) {
        
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = currentYear; 
        } else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = currentYear;
        }
    
        return ((a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    
    });
    return sortedPeeps[0];
};

// Do not edit below this line
module.exports = findTheOldest;
