// 8. Longest Substring Without Repeating Characters

function longestUniqueSubstring(str) {
    let seen = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        while (seen.has(str[right])) {
            seen.delete(str[left]);
            left++;
        }
        seen.add(str[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(longestUniqueSubstring("bbbbb")); // Output: 1 ("b")
