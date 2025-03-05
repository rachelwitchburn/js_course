'use strict';

const raquelArray = [
    'Raquel',
    'Melo',
    2025 - 2004,
    'student',
    ['LUIZ', 'SARA'],
    true
];

const emptyTypes = [];


for (let i = 0; i <= raquelArray.length - 1; i++) {
    console.log(raquelArray[i], typeof raquelArray[i]);
    //emptyTypes[i] = typeof raquelArray[i];
    emptyTypes.push(typeof raquelArray[i]);
}

console.log(emptyTypes);

const years = [1997, 2000, 2004];
const ages = [];

for (let j = 0; j < years.length; j++) {
    let thisAge = 2025 - years[j];
    ages[j] = thisAge;
}

console.log(ages);

// continue and break
console.log('');
console.log('--- only strings: ');
for (let i = 0; i <= raquelArray.length - 1; i++) {
    if (typeof raquelArray[i] != 'string') continue;
    console.log(raquelArray[i], typeof raquelArray[i]);
    //emptyTypes[i] = typeof raquelArray[i];
}

console.log('');
console.log('--- breaking if not strings: ');
for (let i = 0; i <= raquelArray.length - 1; i++) {
    if (typeof raquelArray[i] == 'number') break;
    console.log(raquelArray[i], typeof raquelArray[i]);
    //emptyTypes[i] = typeof raquelArray[i];
}

