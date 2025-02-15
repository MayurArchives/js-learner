// 7. Array Sum (Pair that Adds Up to Target)

function findPair(arr, target) {
    let numSet = new Set();

    for (let num of arr) {
        let complement = target - num;
        if (numSet.has(complement)) {
            return [complement, num];
        }
        numSet.add(num);
    }
    return [];
}

console.log(findPair([2, 7, 11, 15], 9)); // Output: [2, 7]
