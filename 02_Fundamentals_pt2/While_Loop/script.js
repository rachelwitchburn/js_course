'use strict';

/*
for (let rep = 1; rep < 6; rep++) {
    console.log(`${rep}° repetição🏋️`);
};


console.log(`While loop:`);
let rep = 1;
while (rep <= 10) {
    console.log(`${rep}° repetição🏋️`);
    rep++;
}

*/
let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}  