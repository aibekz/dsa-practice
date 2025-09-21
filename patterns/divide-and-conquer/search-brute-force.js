// Brute Force Search
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            console.log("Found at index:", i);
            return i;
        }
    }
    return -1;
}
console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

// Time Complexity: O(n)
// Space Complexity: O(1)
// This is a brute force implementation of the search function that checks each element in the array sequentially.