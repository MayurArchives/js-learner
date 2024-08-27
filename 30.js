// function brotherHello() {
//     console.log("hello,Bro!");
    
// }
// brotherHello();
// basic function Declaration

// 2. Function with Parameters
// function  buddy(name) {
//     console.log("hello," + name + "!");
    
// }
// buddy("mayur");
// buddy("milind");


// Function with Argument
// function printInfo (name,age){
//     console.log(`${name} age is ${age}`);
    
// }
// printInfo("mayur","22");


// 4. Function with Return Value


// Arrow Function:
// const add = (a,b)=> a+b;
// console.log(add(2,3));


// const multlipy = function(a, b){
//     return a * b;

// }
// console.log(multlipy(3,3));

// higher-Order Functions
// A higher-order function is a function that 
// either takes another function as an argument
//  or returns a function.
function applyOperation(x,y,operation) {
    return operation (x,y);
}
function add(a,b){
return a+b;

}
 function multlipy(a,b){
    return a*b ;
 }
 console.log(applyOperation(5,4,add));
 console.log(applyOperation(5,5,multlipy));
 




