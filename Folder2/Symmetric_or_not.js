/*

Problem Statement:
You are given some matrices consist of only 0 's and  1's 
and you have to pick which are symmetric and which are not.
A matrix is said to be symmetric about X- axis if 1st row is identical to n-th row, 
2nd is identical to (n-1)th  row and so on.
A matrix is said to be symmetric about Y- axis if 1st column is identical to the nth column, 
2nd identical to (n-1)th and so on for all columns.
Your task is to print "YES" if it is symmetric about X-axis and Y-axis else "NO"


Input:
First line contains T - number of test cases.
First line of each test case contains the n size of matrix.
Next n lines contains n characters.

Constraints :
1 ≤ T ≤ 10
2 ≤ N ≤ 32

Output:
Print YES or NO in a new line for each test case .

Sample Input:
5
2
11
11
4
0101
0110
0110
0101
4
1001
0000
0000
1001
5
01110
01010
10001
01010
01110
5
00100
01010
10001
01010
01110

Sample Output:
YES
NO
YES
YES
NO

Hint:
Output Explanation :
Test Case 1: Symmetric about both axes, so YES.
Test Case 2: Symmetric about X-axis but not symmetric about Y-axis, so NO.
Test Case 3: Symmetric about both axes, so YES.

*/

function symmetricOrNot(n, mat) {
  // write code here
  //symmetric = Palindromic
  //non symmetric = Non-Palindromic
  let M = n - 1;
  for (let i = 0; i <= M; i++) {
    if (mat[i] == mat[M]) {
      M--;
    } else {
      console.log("NO");
      return;
    }
  }
  for (i = 0; i <= Math.floor(n / 2); i++) {
    let L = mat[i].length - 1;
    for (let j = 0; j <= L; j++) {
      if (mat[i][j] == mat[i][L]) {
        L--;
      } else {
        console.log("NO");
        return;
      }
    }
  }
  console.log("YES");
}
