// Recursion
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/understand-recursion
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/implement-factorial-function
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/implement-pow
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/find-a-way-out-of-the-maze
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/count-the-occurrence-of-a-value-in-a-list
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/sum-all-numbers-in-a-range
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/sum-even-numbers-in-an-object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/flatten-nested-arrays
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/letter-tally
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/binary-representation-of-a-number
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/return-all-possible-combinations-of-a-string
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/return-a-list-of-integer-intervals
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/find-the-first-non-duplicate-character-in-a-string
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/calculate-the-sum-of-an-array-of-numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/check-if-a-number-is-even
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/compute-the-factorial-of-a-number
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/find-the-gcd-of-two-numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/reverse-a-string
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/determine-if-a-string-is-a-palindrome
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/find-the-nth-fibonacci-number
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/capitalize-the-first-letter-of-each-word
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/sum-all-numbers-in-a-range
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/flatten-nested-arrays
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/letter-tally
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/binary-representation-of-a-number
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/return-all-possible-combinations-of-a-string
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/return-a-list-of-integer-intervals
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/find-the-first-non-duplicate-character-in-a-string
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/calculate-the-sum-of-an-array-of-numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/check-if-a-number-is-even
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/compute-the-factorial-of-a-number
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/find-the-gcd-of-two-numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/reverse-a-string
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/determine-if-a-string-is-a-palindrome
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/find-the-nth-fibonacci-number
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/recursion/capitalize-the-first-letter-of-each-word

// Recursion is a process in which a function calls itself as a subroutine.
// This allows the function to be repeated several times, as it can call itself during its execution.

// A recursive function must have a base case that stops the recursion and a recursive case that continues the recursion.
// The base case is a condition that, when met, will stop the function from calling itself again.
// The recursive case is where the function calls itself with modified arguments to approach the base case.

// Example: Factorial Function
function factorial(n) {
    if (n === 0) { // Base case
        return 1;
    }
    
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Time Complexity: O(n)
// Space Complexity: O(n) due to call stack
// This implementation of the factorial function uses recursion to calculate the factorial of a number.
// It multiplies the number by the factorial of the number minus one until it reaches the base case of 0.


function countdown(num) {
      if (num <= 0) { // Base case
         console.log("Done!");
         return;
      }
      console.log(num);
      countdown(num - 1); // Recursive case
}
countdown(5); // 5 4 3 2 1 Done!
// Time Complexity: O(n)
// Space Complexity: O(n) due to call stack
// This function counts down from a given number to zero using recursion.
// It prints the number and then calls itself with the number decremented by one until it reaches zero.

function sumRange(num) {
    if (num === 1) { // Base case
        return 1;
    }
    return num + sumRange(num - 1); // Recursive case
}
console.log(sumRange(5)); // 15
// Time Complexity: O(n)
// Space Complexity: O(n) due to call stack
// This function calculates the sum of all numbers from 1 to the given number using recursion.
// It adds the number to the sum of the range of the number minus one until it reaches the base case of 1.

// Example: Collect Odd Values using Helper Method Recursion
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) { // Base case
            return;
        }
        if (helperInput[0] % 2 !== 0) { // Check if the first element is odd
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1)); // Recursive case with the rest of the array
    }

    helper(arr);
    return result;
}