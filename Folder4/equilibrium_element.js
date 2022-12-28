/*

Description:
Given an array A of N positive numbers.
 The task is to find the position where equilibrium first occurs in the array. 
 Equilibrium position in an array is a position 
    such that the sum of elements before it is equal to the sum of elements after it.
Note:This problem was asked in Oracle

Input:
Input Format:
First line contains an integer N denoting the size of the array.
Then in the next line are N space separated values of the array A.
N <= 1000
Ai <= 10000

Output:
In a new line print the position at which the elements are at equilibrium 
    if no equilibrium point exists print -1.

Sample Input:
5
3 3 5 5 1

Sample Output:
3

*/

function equilibriumElement(N, arr) {
  let check = false;
  for (let i = 1; i < N - 1; i++) {
    //EQP
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j++) {
      //left side
      left += arr[j];
    }
    for (let R = i + 1; R < N; R++) {
      // right side
      right += arr[R];
    }
    if (left === right) {
      console.log(i + 1);
      check = true;
      break;
    }
  }
  if (check == false) {
    console.log(-1);
  }
}
