/*

Problem Statement:
You are given an array A with N elements. 
You are allowed to remove only one element, 
which makes the sum of all the remaining elements exactly divisible by 7.
Your task is to find the first index of smallest element that can be removed from array. 
If there is no answer print-1.

Input:
Input Format:
The first line contains a single integer N.
Next line contains N space separated integers A[k] , (0 <= k < N).

Constraints:
1 <N< 100000
0 <A[k]< 1000000000

Output:
Output Format:
Print a single line containing one integer, 
the first array index of the smallest element that CAN be removed, 
and -1 if there is no such element that he can remove!

Sample Input:
5
14 7 8 2 4

Sample Output:
1

Hint:
Sample:
Both 14 and 7 are valid answers, but since 7 is the smallest, the required array index is 1.

*/

function applyBasicMaths(N, A) {
  //write code here
  let ans = -1;
  let m = Infinity;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += A[i];
  }
  for (let i = 0; i < N; i++) {
    if (A[i] < m && (sum - A[i]) % 7 == 0) {
      m = A[i];
      ans = i;
    }
  }
  console.log(ans);
}
