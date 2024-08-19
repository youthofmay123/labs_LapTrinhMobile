//create an object
let Mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
}
let John = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
}
//calBMI
calcBMI = (mass, height) => {
    return mass / height ** 2;
}
//result
if (calcBMI(Mark.mass, Mark.height) > calcBMI(John.mass, John.height)) {
    console.log(`${Mark.fullname}'s BMI (${calcBMI(Mark.mass, Mark.height)}) is higher than ${John.fullname}'s BMI (${calcBMI(John.mass, John.height)})`);
}
else {
    console.log(`${John.fullname}'s BMI (${calcBMI(John.mass, John.height)}) is higher than ${Mark.fullname}'s BMI (${calcBMI(Mark.mass, Mark.height)})`);
}