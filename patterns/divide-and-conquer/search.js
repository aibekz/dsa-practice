// Divide and Conquer - Binary Search Implementation

// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1.

// Examples:
// search([1,2,3,4,5,6], 4) // 3
// search([1,2,3,4,5,6], 6) // 5
// search([1,2,3,4,5,6], 11) // -1

function search(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);  // Find the middle index
        if (arr[mid] === val) {
            return mid;
        } else if (arr[mid] < val) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

// Time Complexity: O(log n)
// Space Complexity: O(1)
// This implementation uses the divide and conquer pattern to efficiently search for a value in a sorted array.
// It repeatedly divides the search interval in half, reducing the time complexity to logarithmic time.