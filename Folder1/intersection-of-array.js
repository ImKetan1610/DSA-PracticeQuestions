/*

Problem Statement:
You are given 2 arrays arr1 and arr2 of N integers
Your task is to write a program that finds the one integer which is common in both arrays (arr1 and arr2)
Note: There is always one integer common in both arrays

Input:
Input Format:
First line of input contains N, size of arrays
Second line contains N space separated integers making the first array (arr1)
Third line contains N space separated integers making the second array (arr2)

Constraints:
1 <= N <= 1000

Output:
Output Format:
Output that one integer which is common in both arrays

Sample Input:
3
4 5 7
9 2 5

Sample Output:
5

Hint:
arr1 is 4 5 7
arr2 is 9 2 5

5 is common in both array, so we print 5

*/

function intersectionOfArray(N, arr1, arr2) {
  //write code here
  for (let a = 0; a < N; a++) {
    for (let i = 0; i < N; i++) {
      if (arr1[i] == arr2[a]) {
        console.log(arr1[i]);
      }
    }
  }
}
