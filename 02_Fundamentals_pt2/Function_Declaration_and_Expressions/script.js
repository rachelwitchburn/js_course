'use strict';

//Function declaration:
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge1(2004)); // OU

const age1 = calcAge1(2004);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(2004);

console.log(age1, age2);

// outra forma de fazer
const age3 = function calcAge3(birthYear) {
    return 2024 - birthYear;
}

console.log(age3(2000));
