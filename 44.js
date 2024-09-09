// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const sum = numbers.reduce((accumulator, currentValue) =>
//     accumulator + currentValue, 0);
// console.log(sum);

const numbers = [10, 20, 45, 67, 800, 670];
const max = numbers.reduce((accum, currVal) =>
    currVal > accum ? currVal : accum, 0);
console.log(max);
