// const btn = document.querySelector('.btn');
// btn.addEventListener('click',() => {
//     let name = 'mayur kanyal';
//     console.log(name.toUpperCase());
    

// });

// promises
// setTimeout(() => {
//     console.log("mayur");
//     setTimeout(() => {
//         console.log("milind");
//         setTimeout(() => {
//             console.log("aishwary");
//             setTimeout(() => {
//                 console.log("ujjwal");
//                 setTimeout(() => {
//                     console.log("akshay");
//                     setTimeout(() => {
//                         console.log("akshit");
//                     },2000);
//                 },3000);
//             },4000);
//         },5000);
//     },2000);


    
// });

// const myPromise = new Promise((resolve, reject) => {
//     let connection = false;
//     if (connection){
//         resolve("connection is established")
    
//     }
//     else {
//         reject("connection is not established")
//     }
// });

// myPromise.then(()=>{
//     console.log(myPromise);
    

// // });
// myPromise.catch(() => {
//     console.log(myPromise);
    
// })

function orderPizza(callback) {
    console.log("pizza order kar dia ha ");

    setTimeout(() => {
        console.log("pizza deliver ho gya ha ");
        callback();
    },3000);  
}
function eatPizza(){
    console.log("ab mai pizza kha raha hu");
    
    
}
orderPizza(eatPizza);
