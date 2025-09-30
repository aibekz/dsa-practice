function bubbleSort(arr, comparator) {
  // Default comparator (ascending order)
  if (typeof comparator !== 'function') {
    comparator = function(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (comparator(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // swap
        swapped = true;
      }
    }
    n--; // optimization: largest element is already at the end
  } while (swapped);

  return arr;
}

// Example usage:
console.log(bubbleSort([5, 2, 9, 1, 5, 6])); 
// [1, 2, 5, 5, 6, 9]

console.log(bubbleSort([5, 2, 9, 1, 5, 6])); 
// [9, 6, 5, 5, 2, 1]  (descending order)
