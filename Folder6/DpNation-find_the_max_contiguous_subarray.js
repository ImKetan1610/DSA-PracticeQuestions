/*

Description
you are given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Input
1<=T<=10
1<=N<=100000
-1e9<=Ai<=1e9

Output
output a single integer, the solution

Sample Input 1 
3
3
1 2 3
4
-1 -1 0 1
3
2 -1 2

Sample Output 1
6
1
3

*/

function fun(n, A) {
  let max = Math.pow(2, 53);
  let leftmax = -max - 1;
  let mid = 0;
  for (let i = 0; i < n; i++) {
    mid = mid + A[i];
    if (leftmax < mid) {
      leftmax = mid;
    }
    if (mid < 0) {
      mid = 0;
    }
  }
  console.log(leftmax);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let A = input[line].trim().split(" ").map(Number);
    line++;
    fun(n, A);
  }
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
