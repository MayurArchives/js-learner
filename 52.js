let n = 5; // Number of rows

// Upper half
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}
