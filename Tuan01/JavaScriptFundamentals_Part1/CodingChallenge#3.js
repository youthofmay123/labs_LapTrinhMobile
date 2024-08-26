//data:
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];
//average score:
let averageDolphins = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
let averageKoalas = (koalas[0] + koalas[1] + koalas[2]) / 3;
//compare
if(averageDolphins > averageKoalas)
{
    console.log("Dolphins team WIN" );
} else if(averageDolphins < averageKoalas)
{
    console.log("Koala team WIN" );
} else {
    console.log("Koala and Dolphins WIN" );

}
//bonus 1:
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Dolphins win the trophy!");
}
else {
    console.log("Koalas win the trophy!");
}
//bonus 2:
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("Dolphins win the trophy!");
}
else if(averageDolphins < averageKoalas && averageDolphins >= 100){
    console.log("Koalas win the trophy!");
}
else if(averageDolphins == averageKoalas && averageDolphins >= 100) 
{
    console.log("Koalas and Dophins win the trophy!");
}
