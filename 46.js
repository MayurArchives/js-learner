let peopleObj = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Alice", age: 22 },
];
// function createPerson(id, name, age) {
//     peopleObj.push({ id, name, age });


// }
// createPerson(4, "nick", 35)
// console.log(peopleObj);
// function readPerson() {
//     return readPerson;
// }
// console.log(peopleObj);

// function updatePerson(id, name, age) {
//     const person = peopleObj.find(p => p.id == id);
//     if (person) {
//         person.age = age;
//         person.name = name;
//     } else {
//         console.log("people not found");

//     }
// }
// updatePerson(3, "motu", 40);
// console.log(peopleObj);
function deletePerson(id) {
    peopleObj = peopleObj.filter(p => p.id !== id);

}
deletePerson(2);
console.log(peopleObj);
