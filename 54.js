let n = 5; // Maximum number of rows

// Upper half (Increasing)
for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i); // Leading spaces for alignment
    let numbers = "";
    for (let j = 1; j <= i; j++) {
        numbers += j;
    }
    console.log(spaces + numbers);
}

// Lower half (Decreasing)
for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i); // Leading spaces for alignment
    let numbers = "";
    for (let j = 1; j <= i; j++) {
        numbers += j;
    }
    console.log(spaces + numbers);
}
