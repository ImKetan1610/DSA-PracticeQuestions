/*

Problem Statement:
You are given a square matrix of size N x N.
You have to print the spiral traversal of the matrix.
Refer to the below image for better understanding.


Input
The first line of the input contains T, the number of test cases.
The first line of each test case contains N, the size of the matrix.
The next N lines contain N integers each denoting the values of the matrix.

Constraints:
1 <= T <= 10
1 <= N <= 500
1 <= A[i][j] <= 500

Output:
For each test case, print the spiral traversal of the matrix, as shown in the problem description, 
on a single line, on a new line.

Sample Input:
1
3 
1 2 3
4 5 6
7 8 9

Sample Output:
7 8 9 6 3 2 1 4 5

Hint:
The spiral traversal for a given matrix is shown in the image in the problem description.

*/

function Spiraltra(N, mtr) {
  // write code here

  let top = 0;

  let bottom = N - 1;

  let left = 0;

  let right = N - 1;
  let flag = "";
  let number = 0;

  while (number < N * N) {
    for (let i = left; i <= right; i++) {
      flag += mtr[bottom][i] + " ";
      number++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      flag += mtr[i][right] + " ";
      number++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      flag += mtr[top][i] + " ";
      number++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      flag += mtr[i][left] + " ";
      number++;
    }
    left++;
  }
  console.log(flag);
}
function runProgram(input) {
  // Write Code Here
  input = input.split("\n");
  //console.log(input)
  let tc = input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let N = +input[line].trim();
    line++;
    let mtr = [];
    for (let i = 0; i < N; i++) {
      let arr = input[line].trim().split(" ").map(Number);
      mtr.push(arr);
      line++;
    }
    Spiraltra(N, mtr);
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
