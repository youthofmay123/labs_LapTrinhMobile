const ages = [1, 3, 6, 4, 10 ,9];
const checkAge = (age) => {
    return age > 3;
}
ages.map((age, index) => (
    console.log(checkAge(age))
));
