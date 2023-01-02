/*

Description
Given stairs from 0 to n-1, you have to climb the nth stair, on each stair, you can pay the cost on that stair and climb 1 or 2 steps, find the cost to climb the nth stair.

Input
1<=T<=10
1<=N<=100000
1<=Ci<=100 (the cost array)

Output
output the answer to the question for each test case.

Sample Input 1 
2
4
0 0 0 0
10
1 100 1 1 1 100 1 1 100 1

Sample Output 1
0
6

*/

function nahi(n, cost) {
  const dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let cost = input[line++].trim().split(" ").map(Number);
    // console.log(n,arr)
    console.log(nahi(n, cost));
  }
}

if (process.env.USERNAME === "") {
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
