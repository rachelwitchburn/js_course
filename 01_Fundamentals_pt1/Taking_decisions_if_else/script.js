const age = 20;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Rachel can start driving license 👌');
} else {
    const yearsLeft = 18 - age;
    console.log(`Rachel is too young. Wait another ${yearsLeft} years 😂`);
}

// OR
if (age >= 18) {
    console.log('Rachel can start driving license 👌👌');
}


const birthYear = 2004;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
