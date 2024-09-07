function addNumbers(a, b, c, ...others) {
    console.log(others);
    return a + b + c;


}
const res = addNumbers(2, 3, 4, 5, 6, 7, 8)
console.log(res);
