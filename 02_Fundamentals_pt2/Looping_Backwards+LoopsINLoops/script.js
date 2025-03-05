'use strict';

// Looping backwards:
const raquelArray = [
    'Raquel',  // 0
    'Melo',  // 1
    2025 - 2004,  // 2
    'student',  // 3
    ['LUIZ', 'SARA'],  //4
];

for (let i = raquelArray.length - 1; i > -1; i--) {
    console.log(raquelArray[i]);
};

// Loops IN Loops

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-----Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`${rep}° repetição do exercício ${exercise} 🏋️`);
        for (let second = 1; second <= 5; second++) {
            console.log(`Descansando segundo ${second} 🥱`);
        }
    }
}
