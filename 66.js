// Reorganize String


/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const freqMap = {};
    for (const c of s) {
        freqMap[c] = (freqMap[c] || 0) + 1;
    }

    const maxHeap = [...Object.keys(freqMap)].sort((a, b) => freqMap[b] - freqMap[a]);

    let res = "";
    while (maxHeap.length >= 2) {
        const char1 = maxHeap.shift();
        const char2 = maxHeap.shift();

        res += char1;
        res += char2;

        if (--freqMap[char1] > 0) maxHeap.push(char1);
        if (--freqMap[char2] > 0) maxHeap.push(char2);

        maxHeap.sort((a, b) => freqMap[b] - freqMap[a]);
    }

    if (maxHeap.length) {
        const char = maxHeap[0];
        if (freqMap[char] > 1) return "";
        res += char;
    }

    return res;
}