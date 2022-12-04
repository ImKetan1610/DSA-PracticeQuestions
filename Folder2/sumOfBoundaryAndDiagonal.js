/*

Problem Statement:
You will be given an n by n matrix. 
You will have to calculate the sum of the boundary and diagonal elements of the matrix. 
Avoid adding an element twice, 
if it is counted in boundary elements then don't consider it twice in the diagonal element

Input:
Input Format
First line will contain the number of rows n (same as the number of columns)
After that next n lines will n rows of the matrix

Constraints:
n<=1000
Elements Of the Matrix <= 10000

Output:
You have to display a number which is the sum of boundary and diagonal elements of the matrix

Sample Input:
5
1 2 3 4 5
6 7 8 9 1
2 3 4 5 6
7 8 9 1 2
3 4 5 6 7

Sample Output:
93

Hint:
Explanation
Boundary Elements-1,2,3,4,5,1,6,2,7,6,5,4,3,7,2,6
Diagonal Elements(without counting an element twice)-7,4,1,9,4,8

*/

function sumOfBoundaryAndDiagonal(matrix) {
  //write code here
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (
        i == 0 ||
        j == 0 ||
        j == matrix.length - 1 ||
        i == j ||
        j + i == matrix.length - 1 ||
        i == matrix.length - 1
      ) {
        sum = sum + matrix[i][j];
      }
    }
  }
  console.log(sum);
}
