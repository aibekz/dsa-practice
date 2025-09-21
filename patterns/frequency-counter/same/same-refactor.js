function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter = {};
  for (let i = 0; i < arr1.length; i++) {
    frequencyCounter[arr1[i] ** 2] = (frequencyCounter[arr1[i] ** 2] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!frequencyCounter[arr2[i]]) {
      return false;
    }
    frequencyCounter[arr2[i]] -= 1;
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false  // must be same frequency
// Time Complexity: O(n)
// Space Complexity: O(n)
// Refactored version of same.js using frequency counter pattern
// This version uses only one object instead of two