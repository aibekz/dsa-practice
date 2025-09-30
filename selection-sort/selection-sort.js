// What is Selection Sort?

// Selection Sort is a comparison-based sorting algorithm that:

// Divides the array into a sorted and an unsorted portion.

// Repeatedly selects the minimum (or maximum) element from the unsorted portion.

// Swaps it with the first element of the unsorted portion, thereby growing the sorted portion by one element each iteration.

// It’s in-place (no extra memory needed) but not stable (equal elements may get swapped and lose their original order).

// Selection Sort Pseudocode

// 1. Start from the first element of the array (index 0).
// 2. Assume the first element is the minimum.
// 3. Compare this minimum with the rest of the array to find the true minimum.
// 4. Once the minimum is found, swap it with the first element.
// 5. Move to the next element and repeat steps 2-4 until the entire array is sorted.


// 🔹 JavaScript Implementation Basic Version
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    
    // Find index of the smallest element in the unsorted portion
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap if a smaller element was found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]

// With Comparator Function (Flexible Sorting)

function selectionSort2(arr, comparator = (a, b) => a - b) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (comparator(arr[j], arr[minIndex]) < 0) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Ascending
console.log(selectionSort2([5, 3, 8, 4, 2]));
// Descending
console.log(selectionSort2([5, 3, 8, 4, 2], (a, b) => b - a));

// 🔹 Complexity Analysis

// Time Complexity:
// Best: O(n²)
// Average: O(n²)
// Worst: O(n²)
// (Because it always scans the rest of the array to find the min.)
// Space Complexity: O(1) (in-place)
// Stable? ❌ No (because of swaps)


// 🔹 When to Use
// When memory is extremely limited.
// When n is very small.
// For learning & teaching purposes (not practical in production).

// why use selection sort over bubble sort
// Selection sort can be more efficient than bubble sort in terms of the number of swaps performed. 
// While both algorithms have a time complexity of O(n^2), selection sort minimizes the number of swaps by only swapping once per iteration, 
// whereas bubble sort may perform multiple swaps in a single pass through the array. This can lead to better performance in scenarios where swap operations are costly.