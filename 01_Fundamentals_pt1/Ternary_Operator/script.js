const age = 20;
// Do lado esquerdo fica o caso true, do direito o 'else' false:
age >= 18 ? console.log(`I like drinking wine`) : console.log(`I like drinking water`);
console.log(typeof age);

console.log();

const drink_age = age >= 18 ? console.log('🍷') : console.log('💧');

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? '🍷' : '💧'}`);  // funciona porque "${}" aceita expressões internamente, e essa condição ternária é uma expressão

