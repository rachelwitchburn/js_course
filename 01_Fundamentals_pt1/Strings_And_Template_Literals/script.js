const firstName = 'Raquel';
const job = 'student';
const birthYear = 2004;
const year = 2024;

const raquel = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(raquel);

const newRaquel = `I'm ${firstName}, a ${(year - birthYear)} year old ${job}!`;  // `` -> indica ao js que vamos escrever uma template string;
console.log(newRaquel);

console.log(`Just a regular string...`);
console.log(`Just a regular string... with my first name: ${firstName}.`);

console.log('String with \n\
multiple\n\
lines');

console.log();

console.log(`String
multiple
lines`);