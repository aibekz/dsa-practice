// Count unique values in a sorted array
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Examples:   
// countUniqueValues([1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,5]) // 5
// countUniqueValues([]) // 0

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let uniqueCount = 1;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] !== arr[right]) {
      uniqueCount++;
      left = right;
    }
    right++;
  }
  return uniqueCount;
}

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 5])); // 5
console.log(countUniqueValues([])); // 0

// Time Complexity: O(n)
// Space Complexity: O(1)
// Refactored version of countUniqueValues.js using multiple pointers pattern