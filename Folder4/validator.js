/*

Description:
Maze generation algorithm are very famous ways of generating a maze to solve. 
You have been asked by your friend Noddy to validate the generated maze. 
A maze is correct iff
- The maze has exactly one entry point and exactly one exit point (exactly 2 openings in the edges)
**and**
- there must be at least one path from the entry point to the exit point.

Input:
Input Format:
The first line consists of an integer t, the number of test cases.
Then for each test case, the first line consists of two integers m and n, 
    the number of rows and columns in the maze. 
    Then contains the description of the matrix M of order m x n. 
    M[i][j]=# represents a wall and M[i][j]='.' represents a space.

Constraints:
1<=t<=10000
1<=m<=20
1<=n<=20

Output:
For each test case print whether the maze is "yes" (without quotes) 
    if the maze is valid or "no" (without quotes) otherwise

Sample Input:
6
4 4
####
#...
#.##
#.##
5 5
#.###
#..##
##..#
#.#.#
###.#
1 1
.
5 1
#
#
.
.
#
2 2
#.
.#
3 4
#..#
#.##
#.##

Sample Output:
yes
yes
no
yes
no
no

*/

let count = 0;

function recursion(mat, row, col, state, n, m) {
  if (row < 0 || col < 0 || row >= n || col >= m || mat[row][col] == "#") {
    return;
  }
  if (
    row + "" + col !== state &&
    (row == 0 || col == m - 1 || row == n - 1 || col == 0)
  ) {
    count++;
  }
  mat[row][col] = "#";
  recursion(mat, row + 1, col, state, n, m);
  recursion(mat, row, col + 1, state, n, m);
  recursion(mat, row, col - 1, state, n, m);
  recursion(mat, row - 1, col, state, n, m);
  mat[row][col] = ".";
}

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 0;
  for (let i = 0; i < tc; i++) {
    line++;
    let [n, m] = input[line].split(" ").map(Number);
    let mat = [];
    for (let j = 0; j < n; j++) {
      line++;
      let arr = input[line].split("");
      mat.push(arr);
    }
    let flag = true;
    let count1 = 0;
    for (let j = 0; j < n && flag; j++) {
      for (let k = 0; k < m && flag; k++) {
        if (k < m - 1 && k > 0 && j < n - 1 && j > 0) {
          continue;
        }
        if (mat[j][k] == ".") {
          count1++;
          if (count1 == 2) {
            recursion(mat, j, k, j + "" + k, n, m);
            flag = false;
          }
        }
      }
    }
    count == 1 ? console.log("yes") : console.log("no");
    count = 0;
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
