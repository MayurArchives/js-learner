let n = 5; // Number of rows

for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(i); // Add leading spaces
    let numbers = "";
    for (let j = 1; j <= (2 * n - 1) - (2 * i); j++) {
        numbers += j;
    }
    console.log(spaces + numbers);
}
