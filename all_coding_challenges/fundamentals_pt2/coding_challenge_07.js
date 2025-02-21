'use strict';

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


mark.calcBMI(); //chamando a função 
john.calcBMI();


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is highter than ${john.fullName}'s BMI (${john.bmi})`);
} else if (mark.bmi < john.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is highter than ${mark.fullName}'s BMI (${mark.bmi})`);
} else {
    console.log(`Same values!`);
}