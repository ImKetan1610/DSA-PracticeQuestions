/*

Description
A celebrity is a person who is known to all but does not know anyone at a party. If you go to a party of N people, find if there is a celebrity in the party or not.
A square NxN matrix M[][] is used to represent people at the party such that if an element of row i and column j is set to 1 it means ith person knows jth person. Here M[i][i] will always be 0.
Note: Follow 0 based indexing.

Input
Input Format
The first line contains the number of testcases - t
For each testcase:
The first line contains the number of people - n
The next n line contains the values of the matrix

Constraints
1<=t<=10
1<=n<=500
0<=M[i][j]<=1

Output
Print the index of celebrity if present, else print -1

Sample Input 1 
1
3
0 1 0
0 0 0 
0 1 0

Sample Output 1
1

Hint
0th and 2nd person both know 1. Therefore, 1 is the celebrity.

*/

function mainfun(mat, n) {
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(i, []);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        map.get(i).push(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (map.get(i).length === 0) {
      console.log(i);
      return;
    }
  }
  console.log(-1);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let mat = [];
    for (let j = 0; j < n; j++) {
      let arr = input[line++].trim().split(" ").map(Number);
      mat.push(arr);
    }

    mainfun(mat, n);
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
