// Sliding Window Pattern

// This pattern involves creating a "window" (a subset of data)
// that slides over the input data to solve problems efficiently.
// It's particularly useful for problems involving arrays or
// strings where you need to find a contiguous subarray or
// substring that meets certain criteria.

// Example Problem: Given an array of integers and a number k,
// find the maximum sum of a subarray of size k.

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let maxSum = 0;
    let windowSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < num; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window over the array
    for (let i = num; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - num]; // Add the next element and remove the first element of the previous window
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // 24 (7+8+9)
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)
console.log(maxSubarraySum([2, 3], 3)); // null

// Time Complexity: O(n)
// Space Complexity: O(1)
// This implementation efficiently finds the maximum sum of a subarray of size k using the sliding window pattern.