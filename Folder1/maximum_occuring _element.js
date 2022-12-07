/*

Problem Statement:
Given an array A of N integers. 
Your task is to print that integer which presents maximum number of times in the given array.
If there are two elements present the maximum number of times, 
print the one which comes first in the array.


Input:
Input Format:
First line contains N
The second line contains N integers separated by spaces.

Constraints:
N < 100
The array contains integers only

Output:
Print one integer, the one which is present the maximum number of times.

Sample Input:
5
0 2 0 6 9

Sample Output:
0

Hint:
Sample 1 Explanation
Since 0 is present the maximum number of times (2 times) => The answer is 0

*/

function maximumOccuringElement(A, N) {
  //write code here

  let obj = {};
  for (var i = 0; i < N; i++) {
    if (obj[A[i]] === undefined) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]]++;
    }
  }
  let bag;
  let max = -Infinity;
  for (var key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      bag = key;
    }
  }
  console.log(bag);
}
