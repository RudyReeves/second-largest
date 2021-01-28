/***
 * Problem Statement:
 * Given an array, write a function that returns its second-largest element.
**/

 // Here are my two solutions in JavaScript, beginning with the more obvious:

/***
  * `f(arr)` sorts the array `arr` descending (i.e., largest first) and returns the second element.
  * This is easily generalized to give the n-th largest element, but the time complexity is
  * dependent on the sort algorithm, which is probably qsort, and definitely not linear.
**/
const f = (arr, n = 2) =>
	arr.sort((a, b) => b - a)[n - 1];

/***
 * `g(arr)` traverses the array once and keeps track of the `largest` and `secondLargest` elements
 * along the way, returning the the `secondLargest` in linear time, but cannot be generalized liked `f`.
**/
const g = ([first, second, ...rest]) =>
  rest.reduce(([largest, secondLargest], n) => {
    if (n > largest) {
      secondLargest = largest;
      largest = n;
    } else if (n > secondLargest) {
      secondLargest = n;
    }
    return [largest, secondLargest];
  }, [Math.max(first, second), Math.min(first, second)])[1];

// Tests:

const test1 = [8, 10, 9]; // Answer: 9
const test2 = [3, 12, 8, 4, 1, 3]; // Answer: 8

console.log('f:');
console.log(f(test1)); // pass
console.log(f(test2)); // pass

console.log('g:');
console.log(g(test1)); // pass
console.log(g(test2)); // pass