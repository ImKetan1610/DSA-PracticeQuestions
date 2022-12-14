/*

Problem Statement:
You are given an array of size N.
You need to print a total count of subarrays whose sum is odd.
Note:- A subarray is a contiguous part of array. If array is [1,2,3]. 
Subarrays are [1],[2],[3],[1,2],[2,3],[1,2,3].

Input
First-line contains N, the size of the array.
Second-line contains N spaced integers, which are elements of the array.

Constraints:
1 <= N <= 10^4
1 <= A <= 10^8

Output:
Output a single integer which is the total count of the subarray with an odd sum.


Sample Input:
3
1 2 3

Sample Output:
4

Sample Input:
5
2 2 2 2 2 

Sample Output:
0

Hint:
For test case 1:-
Subarrays => [1],[3], [1,2], [2,3] have a odd sum.

Hence there is a total of 4 subarrays with an odd sum.
*/

function countSubarray(size, arr) {
  //write code here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum % 2 == 1) {
        count++;
      }
    }
  }
  console.log(count);
}
