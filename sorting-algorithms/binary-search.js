// Binary Search Implementation in JavaScript

// Binary search is an efficient algorithm for finding an item from a sorted array.
// It works by repeatedly dividing the search interval in half. 
// If the value of the search key is less than the item in the middle of the interval, 
// narrow the interval to the lower half. Otherwise, narrow it to the upper half. 
// Repeatedly check until the value is found or the interval is empty.

// Binary Searc Pseudocode:
// 1. Start with two pointers, one at the beginning (left) and one at the end (right) of the array.
// 2. While left pointer is less than or equal to right pointer:
//    a. Calculate the middle index: mid = Math.floor((left + right) / 2)
//    b. If arr[mid] is equal to target, return mid (target found).
//    c. If arr[mid] is less than target, move the left pointer to mid + 1.
//    d. If arr[mid] is greater than target, move the right pointer to mid - 1.
// 3. If the target is not found, return -1.

// Time Complexity: O(log n)
// Space Complexity: O(1)
// Example
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) {
//             return mid; // Return the index if found
//         } else if (arr[mid] < target) {
//             left = mid + 1; // Search in the right half
//         } else {
//             right = mid - 1; // Search in the left half
//         }
//     }
//     return -1; // Return -1 if not found
// }

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 5)); // Output: 4
console.log(binarySearch(sortedArray, 11)); // Output: -1   


// Note: Binary search requires the array to be sorted before performing the search.
// If the array is not sorted, you can sort it first using an efficient sorting algorithm like quicksort or mergesort.
