/*

Problem Statement:
You are given an array of N integers. You need to print Yes if 42 is present in array, else print No.

Input
Input Format :
First line contains number of integers N present in the array.
Second line contains  N  space separated integers.

Constraints :
1 <= N <= 100

Output:
Output "Yes" or "No" based on condition mentioned above.

Sample Input:
5
3 7 0 9 8

Sample Output:
No

Hint:
We print No as 42 is not present in array.

*/

function equalTo42(size, arr) {
  let flag = "No";
  for (let i = 0; i < size; i++) {
    if (arr[i] === 42) {
      flag = "Yes";
      break;
    }
  }
  console.log(flag);
  //write code here
}
