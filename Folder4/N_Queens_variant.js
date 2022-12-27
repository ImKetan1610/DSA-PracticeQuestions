/*

Description:
The n-queens puzzle is the problem of placing n queens on an n×n chessboard 
    such that no two queens attack each other.
Given an integer n, print the number of distinct solutions to the n-queens puzzle.

. . . Q . . . .
. . . . . . Q .
. . Q . . . . .
. . . . . . . Q
. Q . . . . . .
. . . . Q . . .
Q . . . . . . .
. . . . . Q . .

Sample figure to understand the problem.

Input:
The first line of the input contains one integer n (1 ≤ n ≤ 10).

Output:
Print the number of distinct solutions possible.

Sample Input:
4

Sample Output:
2

Sample Input:
1

Sample Output:
1

Hint:
There are two distinct solutions to the 4-queens puzzle as shown below.
[

    [".Q..",  // Solution 1
    "...Q",
    "Q...",
    "..Q."],

    ["..Q.",  // Solution 2
    "Q...",
    "...Q",
    ".Q.."]

]

So the count is 2.

*/

let count = 0;

function check(mat, n, row, col) {
  if (row === n) {
    count++;
  }
  if (row < 0 || row >= n || col < 0 || col >= n) {
    return;
  }
  for (let i = 0; i < n; i++) {
    if (danger(mat, row, i)) {
      mat[row][i] = 1;
      check(mat, n, row + 1, 0);
      mat[row][i] = 0;
    }
  }
}

function danger(mat, row, col) {
  let j = col - 1;
  for (let i = row - 1; i >= 0 && j >= 0; i-- && j--) {
    if (mat[i][j] == 1) {
      return false;
    }
  }
  j = col + 1;
  for (let i = row - 1; i >= 0 && j < mat.length; i-- && j++) {
    if (mat[i][j] == 1) {
      return false;
    }
  }
  for (let i = row - 1; i >= 0; i--) {
    if (mat[i][col] === 1) {
      return false;
    }
  }
  return true;
}

function runProgram(input) {
  input = +input;
  let mat = new Array(input);
  for (let i = 0; i < input; i++) {
    mat[i] = new Array(input).fill(0);
  }
  check(mat, input, 0, 0);

  console.log(count);
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
