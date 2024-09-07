// function addNumbers(a, b, c, ...others) {
//     console.log(others);
//     return a + b + c;


// }
// const res = addNumbers(2, 3, 4, 5, 6, 7, 8)
// console.log(res);

var names = [" aman", "suresh", "vicky", "ramesh"];
function getNames(name1, name2, name3, name4) {
    console.log(name1, name2, name3, name4);

}
getNames(...names)