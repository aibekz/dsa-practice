function findShortString(longString, shortString) {
    for (let i = 0; i <= longString.length - shortString.length; i++) {
        let match = true;
        for (let j = 0; j < shortString.length; j++) {
            if (longString[i + j] !== shortString[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true; // Return true if found
        }
    }
    return false; // Return false if not found
}

console.log(findShortString("hello world", "world")); // Output: true
console.log(findShortString("hello world", "word"));  // Output: false