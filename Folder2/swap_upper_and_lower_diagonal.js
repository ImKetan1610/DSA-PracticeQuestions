/*

problem statement:
Given a square matrix of dimension (nxn). 
Swap the lower diagonal elements of the matrix with the upper diagonal elements of the matrix.

Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — The dimension of the matrix.
The next n lines of each test case contains n integers (0 ≤ Aij ≤ 100) - The matrix input.

Output:
For each test case, print the answer: The matrix after doing the operation. 
(Check the sample I/O for output display)

Sample Input:
2
3
1 2 3
4 5 6
7 8 9
4
2 3 5 6
4 5 7 9
8 6 4 9
1 3 5 6

Sample Output:
1 4 7 
2 5 8 
3 6 9 
2 4 8 1 
3 5 6 3 
5 7 4 5 
6 9 9 6 

*/

function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let mat = [];
    for (let i = 0; i < n; i++) {
      mat.push(input[line].trim().split(" ").map(Number));
      line++;
    }
    swap(n, mat);
  }
}

function swap(n, arr) {
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      var temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  for (var i = 0; i < n; i++) {
    var bag = "";
    for (var j = 0; j < n; j++) {
      bag += arr[i][j] + " ";
    }
    console.log(bag);
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
