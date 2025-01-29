'use strict';

const raquel = { // objeto: raquel | propriedades: 5 (firstName, lastName, age, job, lovers)
    firstName: 'Raquel',
    lastName: 'Melo',
    age: 2025 - 2004,
    job: 'estudante',
    lovers: ['Luiz José', 'Pyke', 'Chico']
};

console.log(raquel);
console.log();

// dot notation
console.log(raquel.lastName);

// bracket notation
console.log(raquel['lastName']);

const nameKey = 'Name';
console.log(raquel['first' + nameKey]);
console.log(raquel['last' + nameKey]);

/*
const interestedIn = prompt(`O que você quer saber sobre Raquel? Escolha entre "firstName", "lastName", "age", "job", "lovers"`);
// console.log(jongas.interestedIn) -> não funciona porque ".interestedIn" é uma propriedade que não pertence ao objeto "raquel"

console.log(raquel[interestedIn]);

if (raquel[interestedIn]) {
    console.log(raquel[interestedIn]);
} else {
    console.log(`Não existe! O que você quer saber sobre Raquel? Escolha entre "firstName", "lastName", "age", "job", "lovers"`);
}


raquel.location = 'Brasil';
raquel['instagram'] = '@rachelqwb';
console.log(raquel);

*/

// "Raquel tem 3 amores, e seu maior amor é Luiz José"
console.log(`${raquel['firstName']} tem ${raquel.lovers.length} amores e seu maior amor é ${raquel.lovers[0]}`);

raquel.location = 'Brasil';
raquel['instagram'] = '@rachelqwb';
console.log(raquel);
// .length é uma propriedade do array

/*
// TESTANDO COM O ARRAY
const raquelArray = [
    'Raquel',
    'Melo',
    2025 - 2004,
    'estudante',
    ['Luiz José', 'Pyke']
];

const raquelArrayObject = {
    firstName: 0,
    lastName: 1,
    age: 2,
    job: 3,
    lovers: 4
}

const arrayInterestedIn = prompt(`PT.2: O que você quer saber sobre Raquel? Escolha entre "firstName", "lastName", "age", "jog", "lovers"`);
console.log(raquelArray[raquelArrayObject[arrayInterestedIn]]);
*/


