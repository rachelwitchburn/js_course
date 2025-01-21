'use strict';

/*
//Function declaration:
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge1(2004)); // OR

const age1 = calcAge1(2004);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
//
const age2 = calcAge2(2004);

console.log(age1, age2);

// outra forma de fazer
const age3 = function calcAge3(birthYear) {
    return 2024 - birthYear;
}

console.log(age3(2000));
*/

// Arrow function
// function expression (easier)
const calcAge4 = birthYear => 2025 - birthYear; // after the arrow there is what we want to return
const age4 = calcAge4(2004); //2004 is birthYear, the parameter
console.log(age4);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 60 - age;
    //return retirement;  // if there is more than just one line, we need to write the 'return'
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2004, 'Raquel'));
