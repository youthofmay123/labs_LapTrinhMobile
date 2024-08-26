let sum = 0;
const numbers = [65, 44, 12, 4];

function myFunction(item) {
  sum += item;
}
numbers.forEach(myFunction);
console.log(sum);

