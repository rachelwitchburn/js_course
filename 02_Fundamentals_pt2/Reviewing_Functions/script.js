'use strict';

// converting to a normal function expression

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    if (retirement > 0) {
        return retirement;
        console.log('fsd'); // alt+uparrow to move it up
    } else {
        return -1;
    }

    // if there is more than just one line, we need to write the 'return'
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2004, 'Raquel'));
console.log(yearsUntilRetirement(1500, 'Sara'));



