//test data
let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let toltals2 = [];

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    return bill * 0.2;
}
//push
for (let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip(bills2[i]));
    toltals2.push(bills2[i] + tips2[i]);
}
// result
console.log("Bills: ", bills2);
console.log("Tips: ", tips2);
console.log("Total: ", toltals2);