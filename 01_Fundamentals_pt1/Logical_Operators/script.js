const hasDriversLicense = false;  // A
const hasGoodVision = true;  // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log(`Raquel is able to drive`);
} else {
    console.log(`Raquel is not able to drive!`);
}

const isTired = false;  // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) console.log(`Raquel is SUPER able to drive!`);
else console.log(`Please, Raquel is not able to drive!`);
