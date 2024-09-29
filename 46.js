let peopleObj = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Alice", age: 22 },
];
function createPerson(id, name, age) {
    peopleObj.push({ id, name, age });


}
createPerson(4, "nick", 35)
console.log(peopleObj);
