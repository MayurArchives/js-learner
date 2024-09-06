// let users = [

//     { firstName: "Mayur", lastName: "Kanyal", age: 22, hobby: "singing" },
//     { firstName: "Milind", lastName: "Pandey", age: 22, hobby: "dancing" },
//     { firstName: "Ujjwal", lastName: "Chandola", age: 22, hobby: "cooking" },
//     { firstName: "Aishwary", lastName: "Sah", age: 21, hobby: "gym" },

// ]
// let singleUser = users.map((el, i, arr) => {
//     console.log(el, i, arr);


// });
function orderPizza(callback) {
    console.log("pizza order kar dia ha ");

    setTimeout(() => {
        console.log("pizza deliver ho gya ha ");
        callback();
    }, 3000);
    let a = 5;
    console.log(a);


}
function eatPizza() {
    console.log("ab mai pizza kha raha hu");
    let b = 5;
    console.log(b);



}
orderPizza(eatPizza);