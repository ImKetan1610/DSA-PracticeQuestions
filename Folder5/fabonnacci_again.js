/*

Description
Fibonacci numbers, commonly denoted Fn form a sequence, called the Fibonacci sequence, 
    such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0
F(1) = 1
Given an integer n, calculate n-th fibonacci number
DO IT RECURSIVELY

Input:
Input Format :
First line of input contains n

Constraints :
n <= 50

Output:
Output the n-th fibonacci

Sample Input:
5

Sample Output:
5

*/

function fibonacci(n) {
  let arr = [0];
  if (n >= 1) {
    arr.push(1);
  }
  if (n >= 2) {
    arr.push(1);
  }
  for (let i = 3; i <= n; i++) {
    arr.push(arr[Math.abs(i - 1)] + arr[Math.abs(i - 2)]);
  }
  console.log(arr[arr.length - 1]);
}

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  fibonacci(n);
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
