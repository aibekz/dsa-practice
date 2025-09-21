function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  let max = -Infinity;
  for (let i = 0; i <= arr.length - num; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 24 (7+8+9)
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)
console.log(maxSubarraySum([2, 3], 3)); // null

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// This is a naive implementation of the sliding window pattern to find the maximum sum of a subarray of size k.  