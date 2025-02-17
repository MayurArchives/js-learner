// Decode String



var decodeString = function (s) {

    const stack = []
    for (const char of s) {
        if (char !== "]") {
            stack.push(char)
            continue
        }
        let currentChar = stack.pop()
        let innerString = ""
        while (currentChar !== "[") {
            innerString = currentChar + innerString
            currentChar = stack.pop()
        }
        currentChar = stack.pop()
        let multiplier = ""
        while (!Number.isNaN(Number(currentChar))) {
            multiplier = currentChar + multiplier
            currentChar = stack.pop()
        }
        stack.push(currentChar)
        stack.push(innerString.repeat(Number(multiplier)))
    }

    return stack.join('')
};