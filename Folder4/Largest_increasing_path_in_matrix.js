/*

Description:
Given anm x n integers matrix, return the length of the longest increasing path in matrix.
From each cell, you can either move in four directions: left, right, up, or down. 
You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

Input:
Input Format:
The first line of input contains 2 integers m and n - the dimensions of the matrix.
The following m lines contain the description of the board.
The following m lines each contain n integers.
The ith (1<=i<=m) line contains n integers, the jth (1<=j<=n) of which is matrix[i][j]

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 2^3 1 - 1

Output:
Output Format:
Output the length of the longest increasing path in matrix.

Sample Input:
3 3
9 9 4
6 6 8
2 1 1

Sample Output:
4

Sample Input:
3 3
3 4 5
3 2 6
2 2 1

Sample Output:
4

Hint:
First testcase:
The longest increasing path is [1, 2, 6, 9].

9    9    4
^
|
6    6    8
^
|
2 <- 1    1

Second testcase:
The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

3 -> 4 -> 5
          |
          V
3    2    6
2    2    1

*/

let max = -Infinity;
function print(N, M, matrix) {
  let ans = [];
  let count = 1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      solve(i, j, N, M, matrix, count, ans);
    }
  }
  console.log(max);
}

function solve(row, column, N, M, matrix, count, ans) {
  if (column < M - 1 && matrix[row][column + 1] > matrix[row][column]) {
    solve(row, column + 1, N, M, matrix, count + 1, ans);
  }

  if (column >= 1 && matrix[row][column - 1] > matrix[row][column]) {
    solve(row, column - 1, N, M, matrix, count + 1, ans);
  }

  if (row < N - 1 && matrix[row + 1][column] > matrix[row][column]) {
    solve(row + 1, column, N, M, matrix, count + 1, ans);
  }

  if (row >= 1 && matrix[row - 1][column] > matrix[row][column]) {
    solve(row - 1, column, N, M, matrix, count + 1, ans);
  }

  if (max < count) {
    max = count;
  }
  return;
}

function runProgram(input) {
  input = input.trim().split("\n");
  input[0] = input[0].trim().split(" ").map(Number);
  let N = input[0][0];
  let M = input[0][1];

  let line = 1;
  let matrix = [];
  for (let i = 0; i < N; i++) {
    let temp = input[line].trim().split(" ").map(Number);
    line++;
    matrix.push(temp);
  }
  print(N, M, matrix);
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
