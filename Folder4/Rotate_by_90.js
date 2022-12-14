/*

Description:
Given a square matrix of size N, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input.

Input:
Input Format:
First line will contain the number of rows N (same as the number of columns)
After that next N lines will N rows of the matrix.

Constraints:
1 <= N <=1000
1 <= Elements Of the Matrix <= 10000

Output:
You have to display the rotated matrix.

Sample Input:
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8

Sample Output:
4 8 4 8
3 7 3 7
2 6 2 6
1 5 1 5

*/

function rotateBy90(R, matrix) {
  for (var i = matrix[0].length - 1; i >= 0; i--) {
    var result = "";
    for (var j = 0; j < matrix.length; j++) result += matrix[j][i] + " ";
    console.log(result);
  }
}
