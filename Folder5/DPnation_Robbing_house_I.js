/*

Description:
Robbery is pretty common in dp nation.
A robber is planning to rob houses along a street. 
Each house has a certain amount of gold stashed, 
    the only constraint stopping you from robbing each of them is 
    that adjacent houses have a very smart security system connected 
    and it will automatically alert the police if two adjacent houses were robbed on the same night.
Given a list of non-negative integers representing the amount of money of each house, 
    determine the maximum amount of money the robber can rob tonight without getting caught.

Input:
1<=T<=10
1<=N<=1000
1<=Ai<=100

Output:
output a single integer , which is the solution to the question.

Sample Input:
3
2
1 100
3
2 100 99
4
100 1 1 100

Sample Output:
100
101
200

*/

function solve(n, arr) {
  let dp = [];
  if (n <= 2) {
    console.log(Math.max(...arr));
    return;
  }
  dp.push(arr[0]);
  dp.push(arr[1]);
  dp.push(arr[2] + arr[0]);
  for (let i = 3; i < n; i++) {
    dp.push(Math.max(arr[i] + dp[i - 2], arr[i] + dp[i - 3]));
  }
  console.log(Math.max(...dp));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    solve(n, arr);
  }
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
