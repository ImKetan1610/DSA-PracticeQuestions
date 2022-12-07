/*

Problem Statement:
You are given an array A of N integers.
Your task is to find the maximum number of times an odd number is continuously repeated in the array.

Input:
Input Format:
First line contains N which is the number of element present in the array.
Second line contains N integers which are the values of array.

Constraints:
1 <= N <= 100

Output:
Output Format:
Output one integer which the maximum number of times an odd number is repeated in array.

Sample Input: 
12
1 1 1 1 2 2 2 2 2 1 1 1

Sample Output:
4

Hint:
Sample 1 Explanation

1 is repeated 4 times from index 0 to index 3 =>4times
2 is repeated 5 times from index 4 to index 8 =>5times
1 is repeated 3 times from index 9 to index 11 =>3times

Odd number in array are 1.

1 occurs 4 times and 3 times continuously, 
so 4 is maximum number of times an odd number is continuously repeated in this array.

*/

function longestRepeatedOdd(N, array) {
  //write code here
  let max = 0;
  for (let i = 0; i < N; i++) {
    let subArr = [];
    for (let j = i; j < N; j++) {
      subArr.push(array[j]);
      if (isOdd(subArr) == true && subArr.length > max) {
        max = subArr.length;
      }
    }
  }
  console.log(max);
}

function isOdd(arr) {
  let x = arr[0];
  if (x % 2 == 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != x) {
      return false;
    }
  }
  return true;
}
