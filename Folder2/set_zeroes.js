/*

Problem Statement:
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

Input:
Input Format:
The first line contains the number of testcases - t
For each testcase:
The first line contains the size of the matrix, n and m
The next n lines each contains m values (0 or 1)

Constraints:
1<=t<=10
1<=n,m<=500

Output:
Print the modified matrix.

Sample Input:
1
3 3
1 1 1
1 0 1
1 1 1

Sample Output:
1 0 1
0 0 0 
1 0 1

*/

//Enter code here
function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  let arr = [];
  for (let i = 0; i < tc; i++) {
    let [n, m] = input[line++].split(" ").map(Number);
    let mat = [];
    for (let j = 0; j < n; j++) {
      let bag = input[line++].split(" ").map(Number);
      mat.push(bag);
    }

    zero(n, m, mat);
  }
}

function zero(n, m, mat) {
  let bag = new Array();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) bag.push([i, j]);
    }
  }
  for (let i = 0; i < bag.length; i++) {
    let p = bag[i][0];

    let q = bag[i][1];

    for (let j = 0; j < m; j++) {
      mat[p][j] = 0;
    }
    for (let j = 0; j < n; j++) {
      mat[j][q] = 0;
    }
  }
  for (let i = 0; i < n; i++) {
    let bag1 = "";
    for (let j = 0; j < m; j++) {
      bag1 += mat[i][j] + " ";
    }
    console.log(bag1);
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
