// var students = {
//     name: "Mayur",
//     age: "22",
//     hobbies: ["gym", "playing"]
// };
// const { ...rest } = students;
// console.log(rest)

// const Number = [1, 2, 3, 4, 5, 6, 7];
// const moreNumber = [...Number];
// console.log(moreNumber);

const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(second);
console.log(rest);


