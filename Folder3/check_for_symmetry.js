/*

Problem Statement:
You are given a square matrix of size n. 
    Rows are indexed 1 to n from top to bottom and columns are indexed 1 to n form left to right. 
    Matrix consists of only '*' and '.'. 
    You need to check whether matrix is symmetric or not. 
    if it is, check it is symmetric about vertical axis or horizontal axis or both.

A matrix is said to be symmetric about horizontal axis if 1st row is identical to n-th row, 
    2nd is identical to (n-1)th row and so on.

A matrix is said to be symmetric about vertical axis if 1ST column is identical to nth column, 
    2nd identical to (n-1)th and so on for all columns.

Input
Input Format :
First line contains t,the number of test cases. 
    First line of each test case contains n the size of matrix. Each of next n lines contain n characters.

Constraints :
1<=t<=500
1<n<50

Output
Output t lines, answer for each test case. 
    Print "HORIZONTAL" if symmetric about horizontal axis. 
    Print "VERTICAL" if symmetric about vertical axis. 
    Print "BOTH" if symmetric about both axes. 
    print "NO" if it is not symmetric.


Sample Input:
3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*

Sample Output:
NO
BOTH
HORIZONTAL

*/

function checkForSymmetry(n, matrix) {
  let horizontal = true,
    vertical = true,
    index = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      if (matrix[i][j] !== matrix[i][n - j - 1]) {
        vertical = false;
      }
    }
    for (let j = 0; j < Math.floor(n / 2); j++) {
      if (matrix[j][i] !== matrix[n - j - 1][i]) {
        horizontal = false;
      }
    }
  }
  if (horizontal === true && vertical === true) {
    console.log("BOTH");
  } else if (horizontal === true) {
    console.log("HORIZONTAL");
  } else if (vertical === true) {
    console.log("VERTICAL");
  } else {
    console.log("NO");
  }
}
