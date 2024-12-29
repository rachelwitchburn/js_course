'use strict';

function logger() {
    console.log(`My name is Rachel`);
}

// chamar a função:
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(6, 9)); // OR:
const appleJuice = fruitProcessor(6, 9); // talvez seja uma escolha melhor quando se quer salvar o valor
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
