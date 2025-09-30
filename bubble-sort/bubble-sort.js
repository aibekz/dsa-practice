// Bubble Sort

// Pseudo code
// 1. Start from the first element of the array
// 2. Compare the current element with the next element
// 3. If the current element is greater than the next element, swap them
// 4. Move to the next element and repeat steps 2-4 until the end of the array is reached
// 5. Repeat steps 1-4 for n-1 passes, where n is the length of the array

// Time Complexity: O(n^2) in the average and worst case, O(n) in the best case (when the array is already sorted)
// Space Complexity: O(1) - in-place sorting algorithm

// Implementation in JavaScript

function bubbleSort(arr) {
      let n = arr.length;
      for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
               console.log("  Comparing:", arr[j], "and", arr[j + 1]);
                  if (arr[j] > arr[j + 1]) {
                     console.log("  Swapping:", arr[j], "and", arr[j + 1]);
                        swap2(arr, j, j + 1);
                  }
            }
      }
      return arr;
}

// console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]


// Ways to swap two elements in an array

function swap1(arr, idx1, idx2) {
      let temp = arr[idx1];
      arr[idx1] = arr[idx2];
      arr[idx2] = temp;
}

function swap2(arr, idx1, idx2) {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


// Optimized Bubble Sort

function betterBubbleSort(arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr; // edge cases

  let n = arr.length;
  let swapped;

  for (let i = 0; i < n; i++) {
    swapped = false;

    // last i elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      // compare and swap if needed
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // ES6 swap
        swapped = true;
      }
    }

    // if no swaps happened, array is sorted → stop early
    if (!swapped) break;
  }

  return arr;
}

console.log(betterBubbleSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

// Time Complexity: O(n^2) in the average and worst case, O(n) in the best case (when the array is already sorted)
// Space Complexity: O(1) - in-place sorting algorithm   