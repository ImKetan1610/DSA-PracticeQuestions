/*

Description
There are N buildings in Patna, numbered 1,2,…,N. For each i (1≤i≤N), the height of building i is hi.
Spiderman has come to visit Patna and as you know he has a superpower of jumping from one building to the other
He is initially on building 1. He will repeat the following action some number of times to reach building N:
If he is currently on building i, jump to building i+1 or building i+2.
Here, a cost of |hi−hj| is incurred, where j is the building to land on 
    where |hi - hj| is the absolute difference between the heights of buildings
Find the minimum possible total cost incurred before the Spiderman reaches building N.

Input :
Input Format :
First line contains N which is the number of buildings in Patna
Second line contains n space separated integers representing h[i]

Constraints :
2≤N≤100000
1≤hi≤10000

Output:
Print the minimum possible total cost incurred.

Sample Input:
4
10 30 40 20

Sample Output:
30

Hint:
Output Explanation :
If we follow the path 1 → 2 → 4, the total cost incurred would be |10−30| + |30−20| = 30.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let dp = [];
  dp[0] = 0;
  dp[1] = Math.abs(arr[0] - arr[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(
      dp[i - 1] + Math.abs(arr[i - 1] - arr[i]),
      dp[i - 2] + Math.abs(arr[i - 2] - arr[i])
    );
  }
  console.log(dp[n - 1]);
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
