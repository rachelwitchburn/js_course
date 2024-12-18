const bill = 430;

// task 1: calculate the tip

const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;

// task 2: print a string with the bill value and the final value
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
