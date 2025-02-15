// 4. String Palindrome (Ignoring Non-Alphanumeric Characters)


function isPalindrome(str) {
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false
