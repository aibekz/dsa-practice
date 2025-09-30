// Bubble Sort
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