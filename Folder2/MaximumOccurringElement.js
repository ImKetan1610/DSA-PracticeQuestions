/*
Question:
Given an array A of N integers. 
Your task is to print that integer which presents maximum number of times in the given array.

If there are two elements present the maximum number of times, 
print the one which comes first in the array.

Sample input:
5
0 2 0 6 9
Sample Output:
0

Hint:
Sample Explanation
Since 0 is present the maximum number of times (2 times) => The answer is 0
*/

function maximumOccuringElement(A, N) {
  let obj = {};
  for (let i = 0; i < N; i++) {
    if (obj[A[i]] == undefined) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]]++;
    }
  }
  let max = -Infinity;
  let ele = 0;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      ele = key;
    }
  }
  console.log(ele);
}
