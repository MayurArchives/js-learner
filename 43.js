var students = {
    name: "Mayur",
    age: "22",
    hobbies: ["gym", "playing"]
};
const { ...rest } = students;
console.log(rest)
