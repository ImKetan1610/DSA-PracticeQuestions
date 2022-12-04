/*

Problem Statement:
Given a matrix of size n by n. Traverse and print the matrix in spiral form.

Input:
Input Format
First-line contains n
The next n lines contain the matrix

Constraints:
n <= 1000
Ai <= 10000

Output:
Print the matrix in a single line traversing it spirally

Sample Input:
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8

Sample Output:
1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2 

*/

function spirallyTraversingAMatrix(N, matrix) {
  //write code here
  let top = 0;
  let bottom = N - 1;
  let left = 0;
  let right = N - 1;
  let result = "";
  while ((top < bottom) & (left < right)) {
    for (let i = left; i <= right; i++) {
      result += matrix[top][i] + " ";
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result += matrix[i][right] + " ";
    }
    right--;
    for (let i = right; i >= left; i--) {
      result += matrix[bottom][i] + " ";
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      result += matrix[i][left] + " ";
    }
    left++;
  }
  console.log(result);
}
