const numbers = [175, 50, 35, 1];
function myFunc(total, num) {
    return total - num;
}
console.log(numbers.reduce(myFunc));
