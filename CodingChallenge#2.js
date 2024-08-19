//using CodingChallenge1

BMI = (mass, height) => {
    return mass / (height * height)
}

//Test Data 1
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95

//Test Data 2
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

//Test Data 1 Calculations
const markBMI1 = BMI(markHeight1, markHeight1);
const johnBMI1 = BMI(johnMass1, johnHeight1);
const ss1 = markBMI1 > johnBMI1;

//Test Data 2 Calculations
const markBMI2 = BMI(markMass2, markHeight2);
const johnBMI2 = BMI(johnMass2, johnHeight2);

//Result 1: 
console.log("Data 1");
if(markBMI1 > johnBMI1)
{
    console.log("Mark's BMI is higher than John's");
}
else{
    console.log("John's BMI is higher than Mark's");
}
console.log("Data 2");
if(markBMI2 > johnBMI2)
{
    console.log("Mark's BMI is higher than John's");
}
else{
    console.log("John's BMI is higher than Mark's");
}


//Result 2: 
console.log("Data 1");
if(markBMI1 > johnBMI1)
{
    console.log(`Mark's BMI (${markBMI1}) is higher than John's`);
}
else{
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's`);
}
console.log("Data 2");
if(markBMI2 > johnBMI2)
{
    console.log(`Mark's BMI (${markBMI2}) is higher than John's`);
}
else{
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's`);
}
    
    




