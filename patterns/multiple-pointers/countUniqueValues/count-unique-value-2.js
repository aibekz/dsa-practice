function countUniqueValues(arr) {
   let i = 0;
   for (let j = 1; j < arr.length; j++) {
     if (arr[i] !== arr[j]) {
      console.log(arr[i], arr[j]);
       i++;
       arr[i] = arr[j];
     }
   }
   return i + 1;
 }
//  [1,1,1,1,2];

 
 console.log(countUniqueValues([1, 1, 1, 1, 1])); // 2
 console.log(countUniqueValues([1, 2, 3, 4, 5])); // 5
 console.log(countUniqueValues([])); // 0
 
 // Time Complexity: O(n)
 // Space Complexity: O(1)
 // Refactored version of countUniqueValues.js using multiple pointers pattern
 // --- IGNORE ---