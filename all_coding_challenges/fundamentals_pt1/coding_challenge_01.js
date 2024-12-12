//MBI

const weight_Mark = 78;  // uso de const porque nessa situação especifica não ocorrerá mudanças nos valores
const weight_John = 92;  // 
const height_Mark = 1.69;  //
const height_John = 1.95;  //

const BMI_Mark = weight_Mark / (height_Mark ** 2);
const BMI_John = weight_John / (height_John ** 2);

const markHigherBMI = BMI_Mark > BMI_John;

console.log(BMI_John.toFixed(2), BMI_Mark.toFixed(2));