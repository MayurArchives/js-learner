// let myArray = [];
// let numbers = [0, 0, 0, 0, 0];
// console.log(numbers);

// let numbers = new Array(0, 0, 0);
// console.log(numbers);

// let arr = new Array(5).fill(0)
// console.log(arr);

let myArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < myArray.length; i++) {
    myArray[i] += 1;
    sum += myArray[i]
}
console.log(myArray);
console.log(sum);


