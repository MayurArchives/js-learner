// 2. Anagram Check



function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
