
calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    return bill * 0.2;
}

//use arrays and tips and totals
let bills = [125, 555, 44]
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let toltal = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
//result
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", toltal);
