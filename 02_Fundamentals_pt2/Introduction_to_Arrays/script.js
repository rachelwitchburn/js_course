'use strict';

const friend1 = 'Maria';
const friend2 = 'Diego';
const friend3 = 'Sla';

const friends = ['Maria', 'Diego', 'Sla'];  // assim é mais comum
console.log(friends);

const years = new Array(1991, 1984, 2008, 2024); // ao inves de "[]" podemos usar "new Array"

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Mateus';
console.log(friends);

// diferentes tipos de dados dentro do array:

const firstName = 'Raquel';
const raquel = [firstName, 'Melo', 2025 - 2004, 'estudante', friends];
console.log(raquel);

// exercicio

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsFunction = [1977, 1997, 2000, 2003, 2004];

console.log(calcAge(years));  // não funciona

const age1 = calcAge(yearsFunction[0]);
const age2 = calcAge(yearsFunction[1]);
const age3 = calcAge(yearsFunction[2]);

console.log(age1, age2, age3);

const ages = [calcAge(yearsFunction[0]), calcAge(yearsFunction[1]), calcAge(yearsFunction[yearsFunction.length - 1])];
console.log(ages);
