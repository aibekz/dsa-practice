// POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
// FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// PALINDROME SOLUTION

function isPalindrome(str){
  if( str.length <= 1 ) return true;
  if(str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1)); // slice from index 1 to the second last index
}
// console.log(isPalindrome('awesome')); // false
// console.log(isPalindrome('tacocat')); // true

function reverse(str){
    if(str.length === 0)  return "";
    return  reverse(str.slice(1)).concat(str[0]);
}
// console.log(reverse('awesome')); // emosewa
// console.log(reverse('hello')); // olleh


// someRecursive SOLUTION
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback){
  if(arr.length === 0) return false;

  if (callback(arr[0])) return true;
  
  return someRecursive(arr.slice(1), callback);
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// Time Complexity: O(n)
// Space Complexity: O(n) due to call stack

// flatten SOLUTION
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
// flatten([1,2,[3,4],5,[[6]]]); // [1,2,3,4,5,6]
// Space Complexity: O(n) due to call stack
// Time Complexity: O(n^2) due to concat method inside the loop

// capitalizeFirst SOLUTION
function capitalizeFirst (arr) {
    if(arr.length === 0) return [];
    let res = capitalizeFirst(arr.slice(0, -1));
    let str = arr.slice(arr.length - 1)[0];
    res.push(str[0].toUpperCase() + str.slice(1));
    return res;
}
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']