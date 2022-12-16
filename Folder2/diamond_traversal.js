/*

Problem Statement:
Given a square matrix of odd length , print the matrix elements in the order shown in the figure :

1 2 3
4 5 6 
7 8 9

6->2->4->8

Input:
The first line of input will contain an integer T, denoting the number of test cases
The first line of each test case will contain an integer N, denoting the size of the matrix
The next N rows will contain N matrix elements

Constraints:
1<= T <= 10
1<= N <= 100
1<= Matrix[i][j] <= 100

Output:
For each test case, output the matrix elements in a way as shown in the figure, 
print the elements in a new line.

Sample Input:
1
3
1 2 3
4 5 6
7 8 9

Sample Output:
6 2 4 8

Hint:
In Sample:
Print element in the order as mentioned in the description , output will be 6 2 4 8

*/

function diamondTraversal(matrix) {
  var x = (matrix.length - 1) / 2;
  var bag = "";

  var n = matrix.length;

  for (var i = n - 1; i > 0; i--) {
    for (var j = n - 1; j >= x; j--) {
      if (i - j == -x) {
        bag += matrix[i][j] + " ";
      }
    }
  }

  for (var i = 0; i < x; i++) {
    for (var j = x; j >= 0; j--) {
      if (i + j == x) {
        bag += matrix[i][j] + " ";
      }
    }
  }

  for (var i = x; i < n; i++) {
    for (var j = 0; j <= x; j++) {
      if (i - j == x) {
        bag += matrix[i][j] + " ";
      }
    }
  }

  for (var i = n - 2; i >= x; i--) {
    for (var j = x; j < n - 1; j++) {
      if (i + j == n - 1 + x) {
        bag += matrix[i][j] + " ";
      }
    }
  }

  console.log(bag);
}
