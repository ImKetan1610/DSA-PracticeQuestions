/*

Problem Statement:
You are given a 2D array(matrix), of N rows and M columns.
You need to print elements of array in as shown in diagram, on a single line.

1 8 9
2 7 10
3 6 11
4 5 12

For example, for the above matrix, the required output would be as shown below.
9 10 11 12 8 7 6 5 1 2 3 4

Input:
First line contains two integers N and M, no of rows and columns of matrix.
Next N lines contains M space separated integers which are elements of matrix.

Constraints:
1 <= N*M <= 10^6
1 <= A[i][j] <= 100

Output:
Print all elements of matrix on single line, in the order as given in the problem statement.

Sample Input:
4 3
1 8 9
2 7 10
3 6 11
4 5 12

Sample Output:
9 10 11 12 8 7 6 5 1 2 3 4

*/

function traverse2dArray(N, M, matrix) {
  //write code here
  let bag = "";
  for (i = M - 1; i >= 0; i--) {
    for (j = 0; j < N; j++) {
      bag = bag + matrix[j][i] + " ";
    }
  }
  console.log(bag);
}
