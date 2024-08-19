//Data
let bill = 430;
let tip;
//Tính tiền hoa
if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
}
else {
    tip = bill * 0.2;
}
//Print
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);