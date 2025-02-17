// Remove All Adjacent Duplicates In String


const removeDuplicates = s => {
    const stack = [];
    for (const char of s) {
        stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
    }
    return stack.join('');
};  