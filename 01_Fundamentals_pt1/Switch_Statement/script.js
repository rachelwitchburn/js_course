const day = 'monday';

switch (day) {
    case 'monday':  // day === monday
        console.log(`Plan the course`);
        console.log(`Go to cooding meetup`);
        break;

    case 'tuesday':
        console.log(`Learn Git and Github`);
        break;

    case 'wednesday':  // executará o código abaixo
    case 'thursday':
        console.log(`Watch javascript course`);
        break;

    case 'friday':
        console.log(`Clean the house`);
        break;

    case 'saturday':
    case 'sunday':
        console.log(`Relax...`);
        break;

    default:
        console.log(`Invalid day! 😐`);
}

console.log();

// E se fosse com if & else?

if (day === 'monday') {
    console.log(`Plan the course`);
    console.log(`Go to cooding meetup`);
} else if (day === 'tuersday') {
    console.log(`Learn Git and Github`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Watch javascript course`);
} else if (day === 'friday') {
    console.log(`Clean the house`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Relax...`);
} else {
    console.log(`Not a valid day. 😐`);
}
