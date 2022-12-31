/*

Description:
Let us say that you are given a number N, 
    you've to find the number of different ways to write it as the sum of 1, 3 and 4.
For example, if N = 5, the answer would be 6.
1 + 1 + 1 + 1 + 1
1 + 4
4 + 1
1 + 1 + 3
1 + 3 + 1
3 + 1 + 1

Input:
Input Format:
First and the only line contains the value of N

Constraints:
N <= 50

Output:
Output the number of ways

Sample Input:
5

Sample Output:
6

*/

function op(n) {
  dp = [];
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 3] + dp[i - 4];
  }
  return dp[n];
}

function processData(input) {
  let n = +input;
  console.log(op(n));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
