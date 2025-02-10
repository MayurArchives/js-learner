let n = 5; // Number of rows

for (let i = 0; i < n; i++) {
    let spaces = " ".repeat(n - i - 1); // Print leading spaces
    let numbers = "";
    for (let j = 1; j <= (2 * i + 1); j++) {
        numbers += j;
    }
    console.log(spaces + numbers);
}
