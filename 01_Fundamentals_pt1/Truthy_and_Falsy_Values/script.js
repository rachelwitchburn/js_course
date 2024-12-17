// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Raquel'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You should get a job!`);
}

console.log(typeof monney);

let height;
if (height) {  // aqui acontece uma conversão de 'height' para boolean
    console.log(`Yay!! Height is defined!`);
} else {
    console.log(`Height is UNDEFINED!`);
}

let height2 = 0;
if (height2) {  // undefined
    console.log(`Yay!! Height is defined again!`);
} else {
    console.log(`Height is UNDEFINED again!`);
}

let height3 = 2392;
if (height3) {  // defined
    console.log(`Yay!! Height is defined again again!`);
} else {
    console.log(`Height is UNDEFINED again again!`);
}