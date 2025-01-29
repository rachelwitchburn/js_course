'use strict';

// não podemos referenciar algum elemento do array por um nome, somente por sua posição
const raquelArray = [
    'Raquel',
    'Melo',
    2025 - 2004,
    'estudante',
    ['Luiz José', 'Pyke']
];

// como resolver isso: objetos

const raquel = { // objeto: raquel | propriedades: 5 (firstName, lastName, age, job, lovers)
    firstName: 'Raquel',
    lastName: 'Melo',
    age: 2025 - 2004,
    job: 'estudante',
    lovers: ['Luiz José', 'Pyke']
};

console.log(raquel);

// OBJETOS: unstructed data
// ARRAYS: ordered data
