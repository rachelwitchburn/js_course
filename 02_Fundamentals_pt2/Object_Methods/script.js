'use strict';


const raquel = { // objeto: raquel | propriedades: 5 (firstName, lastName, age, job, lovers)
    firstName: 'Raquel',
    lastName: 'Melo',
    birthYear: 2004,
    job: 'estudante',
    lovers: ['Luiz José', 'Pyke', 'Chico'],
    hasDriversLiscense: false,

    /*
    calcAge: function (birthYear) {  // isso é um método, porque toda função ligada à um objeto é um método
        return 2025 - birthYear;
    }
        */

    /*
    calcAge: function () {
        // console.log(this); // this = raquel porque quando chamamos a função: "raquel." é o objeto que chama o método
        // então this. se refere ao objeto que chama o método presente internamente dele
        return 2025 - this.birthYear;
    }
        */


    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },


    getSummary: function () {
        this.summary = `Meu nome é${this.firstName} ${this.lastName}. tenho ${this.calcAge()} anos e sou ${this.job}. Eu ${this.hasDriversLiscense ? 'tenho carteira de motorista.' : 'não tenho carteira de motorista'}`;
        return this.summary;
    }
};

console.log(raquel.getSummary());
console.log(raquel.summary);

console.log(raquel.calcAge());
console.log(raquel.age);

// console.log(raquel['calcAge'](2004));
// console.log(raquel);

// CHALLENGE
// Raquel é uma estudante de 21 anos. E ela não tem uma carteira de motorista
