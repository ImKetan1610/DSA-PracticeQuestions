/*

Problem Statement:
Given an array A of size n with positive numbers, 
    find the total number of subarrays that have sum < m.

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
    Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) and M as mentioned in the question.
The second line of the test case contains n integers (1 ≤ Ai ≤ 100).

Output:
For each test case, print the answer: The number of subarrays.

Sample Input:
1
5 5
1 5 1 3 2

Sample Output:
5

*/

function SHSLM(n, k, arr) {
  let c = 0;

  let X = 0;

  let Y = 0;

  let sum = arr[0];

  while (X < n && Y < n) {
    if (sum < k) {
      Y++;
      if (Y >= X) {
        c += Y - X;
      }
      if (Y < n) {
        sum += arr[Y];
      }
    } else {
      sum -= arr[X];
      X++;
    }
  }

  console.log(c);
}

function runProgram(input) {
  input = input.split("\n");
  let t = +input[0];

  let line = 1;
  for (let i = 0; i < t; i++) {
    let Y = input[line].split(" ").map(Number);

    let n = Y[0];

    let k = Y[1];

    line++;

    let arr = input[line].split(" ").map(Number);

    line++;

    SHSLM(n, k, arr);
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
