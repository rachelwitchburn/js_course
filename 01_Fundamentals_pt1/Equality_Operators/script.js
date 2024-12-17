const age = 18;

if (age === 18) {
    console.log('OK!');
} else {
    console.log('NOT OK!');
}

if (age == 18) console.log('Be careful...');
if (age == '18') console.log('ow.. but be careful!');
if (age === '18') console.log(`you probably won't see this`);

console.log('18' === 18);
console.log(`Use the '===' operator! 😁👍`);

const fav_number = prompt(`What's your favorite number?`);  // prompt funcionará no navegador
console.log(fav_number);
console.log(typeof fav_number);
if (fav_number == 4) {
    console.log('Cool! 4 is an amazing number!');
}

// HOW TO FIX THAT?? run it in navigator and try to understand ;)

const fav_number2 = Number(prompt(`What's your favorite number?`));  // prompt funcionará no navegador
console.log(fav_number2);
console.log(typeof fav_number2);
if (fav_number2 === 4) {
    console.log('Cool! 4 is an amazing number!');
}

// com else if:

const fav_number3 = Number(prompt(`What's your favorite number?`));  // prompt funcionará no navegador
console.log(fav_number3);
console.log(typeof fav_number3);
if (fav_number3 === 4) {
    console.log('Cool! 4 is an amazing number!');
} else if (fav_number3 === 7) {
    console.log('7 is also a cool number');
} else if (fav_number3 === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 4 or 7 :(');
}

if (fav_number3 !== 4) console.log('Why not 4?');
