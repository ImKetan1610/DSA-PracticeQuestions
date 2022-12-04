/*

Problem Statement:
You are given an n x n 2D matrix.
Rotate the matrix by 90 degrees (clockwise).
You need to do this without using any lists.
(You can use a list for storing the input)

Input:
Input Format
A single line will contain the matrix

Constraints:
n <= 1000
Ai <= 10000

Output
A single containing the rotated matrix

Sample Input:
1 2 3 4 5 6 7 8 9

Sample Output:
7 4 1 8 5 2 9 6 3

*/

function runProgram(input) {
  input = input.trim().split(" ");
  let count = 0;
  let matrix = [];
  let n = Math.sqrt(input.length);
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(input[count]);
      count++;
    }
    matrix.push(arr);
  }
  multi_array(n, matrix);
}

function multi_array(N, array) {
  let bag = "";
  for (let i = 0; i < N; i++) {
    for (let j = N - 1; j >= 0; j--) {
      bag += array[j][i] + " ";
    }
  }
  console.log(bag);
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
