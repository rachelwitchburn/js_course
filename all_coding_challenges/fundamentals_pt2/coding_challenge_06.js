'use strict';
// Calculator improvement

// task 1: calculate the tip using a function

// const bill = 100;

const calcTip = function (bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = (15 / 100) * bill
        console.log(`Seu desconto é de ${tip}`);
    } else {
        tip = (20 / 100) * bill
        console.log(`Seu desconto é de ${tip}`);
    }
    return tip;
}


const bills = [125, 555, 44];
const tips = [];
for (let i = 0; i <= bills.length - 1; i++) {
    tips.push(calcTip(bills[i]));
}
console.log(tips);

const totals = [];
for (let i = 0; i <= bills.length - 1; i++) {
    totals.push(bills[i] + tips[i]);
}
console.log(totals);

// const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

