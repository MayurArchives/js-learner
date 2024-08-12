const myPromise = new Promise((resolved, reject) => {
    let success = true;
    if (success) {
        resolved("operation is successful");
    }
    else {
        reject("operation is failed");
    }
}).then((mssg) => {
    console.log(mssg);
}).catch((mssg) => {
    console.log(mssg);
}).finally(() => {
    console.log("this is finally");
});

// myPromise.then((mssg) => {
//     console.log(mssg);
// })

// myPromise.catch((mssg) => {
//     console.log(mssg);
// })

// myPromise.finally(() => {
//     console.log("this is finally");

// })