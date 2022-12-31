/*

Description:
You are given a number N, you've to find the number of different ways to write it as the sum of 1, 3 and 4.

Input:
Input Format:
First line contains value of N

Constraints:
N <= 50

Output:
Output Format:
Output the number of ways to do so

Sample Input:
5

Sample Output:
6

Hint:
1 + 1 + 1 + 1 + 1
1 + 4
4 + 1
1 + 1 + 3
1 + 3 + 1
3 + 1 + 1

*/

function runProgram(input) {
  let n = Number(input.trim());
  let ans = numberOfWays(n);
  console.log(ans);
}

function numberOfWays(n) {
  let dp = new Array(n).fill(0);

  dp[0] = dp[1] = dp[2] = 1;
  dp[3] = 2;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 3] + dp[i - 4];
  }
  return dp[n];
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
