// Linear Search Algorithm Implementation

// Linear search is a simple search algorithm that checks 
// each element in an array sequentially until the target 
// element is found or the end of the array is reached.

// Example
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}

console.log(linearSearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // Output: -1

const usStatesAndTerritories = [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ];

console.log(linearSearch(usStatesAndTerritories, "Texas")); // Output: Found at index: 47
console.log(linearSearch(usStatesAndTerritories, "Guam")); // Output: Found at index: 12
console.log(linearSearch(usStatesAndTerritories, "India")); // Output: Not found

console.log(usStatesAndTerritories.indexOf("Texas")); 
console.log(usStatesAndTerritories.includes("Texas"));
console.log(usStatesAndTerritories.find(state => state === "Texas")); // Output: Texas
console.log(usStatesAndTerritories.findIndex(state => state === "Texas")); // Output: 47

// JavaScript Linear Search Builtin Methods
// 1. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// 2. includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 3. find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
// 4. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
// These methods internally use linear search to find elements in an array.
// how many builtin methods are there in js? 
// There are many built-in methods in JavaScript, especially for arrays, strings, objects, and other data types.
// Some commonly used built-in methods include:
// Array Methods: push(), pop(), shift(), unshift(), splice(), slice(), forEach(), map(), filter(), reduce(), sort(), reverse(), concat(), join(), indexOf(), includes(), find(), findIndex()
// String Methods: charAt(), charCodeAt(), concat(), includes(), indexOf(), lastIndexOf(), match(), replace(), search(), slice(), split(), substr(), substring(), toLowerCase(), toUpperCase(), trim()
// Object Methods: keys(), values(), entries(), assign(), hasOwnProperty()
// Number Methods: toFixed(), toPrecision()
// Math Methods: abs(), ceil(), floor(), round(), max(), min(), random()
// Date Methods: getDate(), getDay(), getFullYear(), getHours(), getMilliseconds(), getMinutes(), getMonth(), getSeconds()
// This is not an exhaustive list, and there are many more built-in methods available in JavaScript. The exact number can vary depending on the JavaScript version and environment (browser, Node.js, etc.).


// Linear Search Big O Notation
// Time Complexity: O(n)
// Space Complexity: O(1)

// Linear search is not the most efficient search algorithm for large datasets, 
// but it is simple to implement and works well for small or unsorted datasets.

// Best Case: O(1) - The target element is found at the first position of the array.
// Average Case: O(n) - On average, the target element is found halfway through the array.
// Worst Case: O(n) - The target element is not found in the array, or it is located at the last position of the array.

// Space Complexity: O(1) - Linear search uses a constant amount of space, 
// regardless of the size of the input array, as it only requires a few variables for iteration and comparison.