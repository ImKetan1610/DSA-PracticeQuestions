/*

Description:
Consider a rat placed at (0, 0) in a square matrix of order N * N. 
It has to reach the destination at (N - 1, N - 1). 
Find all possible paths that the rat can take to reach from source to destination. 
The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). 
Value 0 at a cell in the matrix represents that it is blocked 
    and rat cannot move to it while value 1 at a cell in the matrix represents 
    that rat can be travel through it.
Note: In a path, no cell can be visited more than one time. 
If the source cell is 0, the rat cannot move to any other cell.

Input:
Input Format:
The first line contains an integer n - the dimension of the maze
The next n lines each contain n integers
The ith line contains n integers, the jth of which is m[i][j]

Constraints:
2 <= n <= 5
0 <= m[i][j] <= 1

Output:
Output Format:
Print the list of paths in lexicographically increasing order, if there is no possible path print -1.

Sample Input:
4
1 0 0 0
1 1 0 1
1 1 0 0 
0 1 1 1

Sample Output:
DDRDRR DRDDRR

Hint:
The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, 
    when printed in sorted order we get DDRDRR DRDDRR.

*/

function self(i, j, a, n, d, s) {
  if (i < 0 || i > n - 1 || j < 0 || j > n - 1) {
    return;
  }
  if (a[i][j] == 0) {
    return;
  }

  if (d == 0) {
    s += "D";
  }
  if (d == 1) {
    s += "U";
  }
  if (d == 2) {
    s += "R";
  }
  if (d == 3) {
    s += "L";
  }

  if (i == n - 1 && j == n - 1) {
    return;
  }

  a[i][j] = 0;

  self(i + 1, j, a, n, 0, s);
  self(i - 1, j, a, n, 1, s);
  self(i, j + 1, a, n, 2, s);
  self(i, j - 1, a, n, 3, s);
  a[i][j] = 1;
}

function runProgram(input) {
  input = input.split("\n");
  g = 0;
  h = 0;
  s = "";
  d = -1;
  f = "";
  l = "";
  line = 0;
  t = [];
  var [x] = input[line].split(" ").map(Number);

  arr = [];
  for (b = 0; b < x; b++) {
    line++;
    arr.push(input[line].trim().split(" "));
  }
  self(g, h, arr, x, d, s);
  if (t.length != 0) {
    t.sort(function (a, b) {
      if (a > b) return 1;
      else if (a < b) return -1;
      return 0;
    });
    console.log(t.join(" "));
  } else {
    console.log(-1);
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
