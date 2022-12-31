/*

Description:
You are given a string S. 
You have to find the length of the longest subsequence of the string which forms a palindrome.
For instance, if S is " AABCDEBAZ";
Longest Palindromic subsequence: ABCBA or ABDBA or ABEBA
There are many subsequences can be found which are palindrome 
    like, AA, BCB, ABA, BB etc but we need to find the one with the maximum length.

Input:
Input Format:
First line of the input contains string S

Constraints:
Length os string S is 1000 at max

Output:
Output Format:
Output the length of such a subsequence

Sample Input:
AABCDEBAZ

Sample Output:
5

*/

function again(str) {
  let n = str.length;
  let i, j, cl;

  let dp = new Array(n);
  for (let x = 0; x < n; x++) {
    dp[x] = new Array(n);
    for (let y = 0; y < n; y++) dp[x][y] = 0;
  }

  for (i = 0; i < n; i++) dp[i][i] = 1;
  for (cl = 2; cl <= n; cl++) {
    for (i = 0; i < n - cl + 1; i++) {
      j = i + cl - 1;
      if (str[i] == str[j] && cl == 2) dp[i][j] = 2;
      else if (str[i] == str[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
    }
  }

  console.log(dp[0][n - 1]);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0].trim();
  again(str);
}

if (process.env.USER === "") {
  runProgram("");
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
    runProgramm(read);
    process.et(0);
  });
}
