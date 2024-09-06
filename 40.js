// var arr = [4, 10, 8];
// var filterMethod = arr.filter(e => e > 4);
// console.log(filterMethod);
// var finddMethod = arr.find(e => e > 4)
// console.log(finddMethod);
// const users = [
//     { name: 'mayur', age: 14 },
//     { name: 'milind', age: 52 },
//     { name: 'aish', age: 56 },
//     { name: 'ujjwal', age: 18 },
// ];

// const youngPeople = users.filter((person) => {
//     return person.age <= 15;
// });
// const seniorPeople = users.filter((person) => person.age >= 50);

// console.log(seniorPeople);
// console.log(youngPeople);
const users = [
    { name: 'mayur', age: 14 },
    { name: 'milind', age: 52 },
    { name: 'aish', age: 56 },
    { name: 'ujjwal', age: 18 },
];

const youngPeople = users.filter(({ age }) => {
    return age <= 15;
});
const seniorPeople = users.filter(({ age }) => age >= 50);

console.log(seniorPeople);
console.log(youngPeople);

