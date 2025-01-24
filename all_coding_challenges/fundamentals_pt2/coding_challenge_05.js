'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);
let scoreDolphins = calcAverage(23, 34, 27);
let scoreKoalas = calcAverage(75, 65, 76);
console.log(`DOLPHINS: ${scoreDolphins}`);
console.log(`KOALAS: ${scoreKoalas}`);


const checkWinner = function (avgDolphins, avgKoalas) {
    let winner;
    if (avgDolphins >= avgKoalas * 2) {
        winner = `Dolphins`;
        console.log(`${winner} win (${scoreDolphins} vs ${scoreKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        winner = `Koalas`;
        console.log(`${winner} win (${scoreKoalas} vs ${scoreDolphins})`);
    } else {
        console.log(`There is no winner`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
