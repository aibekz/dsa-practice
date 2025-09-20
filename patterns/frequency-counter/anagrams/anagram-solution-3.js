// Anagrams - Solution 3: Using early return optimization
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:
// validAnagram('cinema', 'iceman') // true
// validAnagram('hello', 'bye') // false

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};

  // Build frequency counter for first string
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  // Check second string with early return optimization
  for (let i = 0; i < str2.length; i++) { 
    let letter = str2[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('cinema', 'iceman')); // true
console.log(validAnagram('hello', 'bye')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

// Time Complexity: O(n)
// Space Complexity: O(n)
// Uses early return optimization - returns false immediately when mismatch is found
