// Multiple Pointers Pattern
// The multiple pointers pattern involves creating two or more pointers that move through the data structure to find a solution.
// This pattern is often used to solve problems related to arrays or strings, such as finding pairs that sum to a specific value,
// or checking for palindromes.
// It is particularly useful for problems that require a linear time complexity, as it can often reduce the need for nested loops.

// Example Problem: Given a sorted array of integers, find the first pair where the sum is zero.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Examples:
// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

function sumZero(arr) {
  let left = 0; // Start pointer
  let right = arr.length - 1; // End pointer

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--; // Move right pointer left to decrease sum
    } else {
      left++; // Move left pointer right to increase sum
    }
  }
  return undefined; // No pair found
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

// Time Complexity: O(n)
// Space Complexity: O(1)

// Note: The array must be sorted for the multiple pointers technique to work effectively.   