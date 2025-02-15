// 6. String Compression


function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed.length < str.length ? compressed : str;
}

console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
console.log(compressString("abc")); // Output: "abc" (since compression would not reduce length)
