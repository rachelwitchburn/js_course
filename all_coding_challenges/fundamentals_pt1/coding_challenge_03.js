// task 1: average
const dolphins_average = (96 + 108 + 89) / 3;
const koalas_average = (88 + 91 + 110) / 3;

console.log(`The average of dolphins's team is ${dolphins_average.toFixed(1)}.`);
console.log(`The average of koalas's team is ${koalas_average.toFixed(1)}.`);

console.log();


// task 2: winner
let winner;
if (dolphins_average > koalas_average) {
    let winner = dolphins_average;
    console.log(`And the winner is...... Dolphins's TEAM!`);
} else if (koalas_average > dolphins_average) {
    let winner = koalas_average;
    console.log(`And the winner is...... Koalas's TEAM!!`);
} else if (koalas_average === dolphins_average) {
    let winner = dolphins_average, koalas_average;
    console.log(`Both of teams are winner`);
} else {
    console.log(`You did something wrong...`);
}

console.log();

// task 3: bonus 1

let winner_and_bonus1;
if (dolphins_average > koalas_average && dolphins_average >= 100) {
    let winner_and_bonus1 = dolphins_average;
    console.log(`And the winner is...... Dolphins's TEAM!`);
} else if (koalas_average > dolphins_average && koalas_average >= 100) {
    let winner_and_bonus1 = koalas_average;
    console.log(`And the winner is...... Koalas's TEAM!!`);
} else if (koalas_average === dolphins_average && (koalas_average && dolphins_average >= 100)) {
    let winner_and_bonus1 = dolphins_average, koalas_average;
    console.log(`Both of teams are winner`);
} else {
    console.log(`Neither teams are winners`);
}

// task 4: bonus 2 (mesmo código acima)
