//MBI

const weight_Mark = 78;  // uso de const porque nessa situação especifica não ocorrerá mudanças nos valores
const weight_John = 92;  // 
const height_Mark = 1.69;  //
const height_John = 1.95;  //

const BMI_Mark = weight_Mark / (height_Mark * height_Mark);
const BMI_John = weight_John / (height_John * height_John);
console.log(BMI_Mark.toFixed(2), BMI_John.toFixed(2));

//task 1 & task 2
if (BMI_Mark > BMI_John) {
    console.log(`Mark's BMI ${BMI_Mark.toFixed(2)} is higher than John's ${BMI_John.toFixed(2)}!`);
} else {
    console.log(`John's BMI ${BMI_John.toFixed(2)} is higher than Mark's ${BMI_Mark.toFixed(2)}!`);
}
