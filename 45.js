// how to create an array


// let fruits = ['apple', 'mango', 'banana'];
// console.log(fruits);

// using array constructor

// let myArray = new Array();
// let numbers = new Array(10, 20, 30);
// console.log(numbers);

// how to add element in array

// let myArray = ['element1', 'element2'];
// // myArray.push('element1');
// // myArray.push('element2');
// myArray.push('element3');
// console.log(myArray);


// how to remove element in array

// let myArray = [1, 2, 3, 4];
// let lastElement = myArray.pop();
// console.log(myArray);
// console.log(lastElement);


// let myArray = [1, 2, 3, 4, 5];
// myArray.push(6, 7, 8, 9);
// console.log(myArray);

// let myArray = [
//     { id: 1, name: "mayur", age: 22 },
//     { id: 2, name: "ash", age: 23 },
//     { id: 3, name: "mahi", age: 24 },

// ];
// function createPeople(id, name, age) {
//     myArray.push({ id, name, age });

// }
// createPeople(4, "ujju", 23);
// console.log(myArray);

// function readPep() {
//     return myArray;



// }
// console.log(readPep);

let myArray = [
    { id: 1, name: "mayur", age: 22 },
    { id: 2, name: "ash", age: 23 },
    { id: 3, name: "mahi", age: 24 },

];
function updatePerson(id, newName, newAge) {
    const person = myArray.find(p => p.id == id);

    if (person) {

        person.name = newName;
        person.age = newAge;
    } else {
        console.log("people not found");

    }
}
updatePerson(2, "nick", 40);
console.log(myArray);

















