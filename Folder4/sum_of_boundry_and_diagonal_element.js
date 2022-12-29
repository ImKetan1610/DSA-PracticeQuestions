/*

Description:
You will be given an n by n matrix. 
    You will have to calculate the sum of the boundary and diagonal elements of the matrix. 
    Avoid adding an element twice, 
    if it is counted in boundary elements then don't consider it twice in the diagonal element

Input:
Input Format:
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
Sample 1 Explanation
Boundary Elements-1,2,3,4,5,1,6,2,7,6,5,4,3,7,2,6
Diagonal Elements(without counting an element twice)-7,4,1,9,4,8

*/

function sumOfBoundaryAndDiagonal(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    sum = sum + matrix[0][i];
  }

  for (i = 1; i < matrix.length; i++) {
    sum = sum + matrix[i][matrix.length - 1];
  }

  for (i = matrix.length - 2; i >= 0; i--) {
    sum = sum + matrix[matrix.length - 1][i];
  }

  for (i = matrix.length - 2; i >= 1; i--) {
    sum = sum + matrix[i][0];
  }

  for (
    var j = 1, k = 1;
    j <= matrix.length - 2 && k <= matrix.length - 2;
    j++, k++
  ) {
    sum = sum + matrix[j][k];
  }

  for (
    j = 1, k = matrix.length - 2;
    j <= matrix.length - 2 && k >= 1;
    j++, k--
  ) {
    if (j == k) {
      continue;
    } else {
      sum = sum + matrix[j][k];
    }
  }
  console.log(sum);
}
