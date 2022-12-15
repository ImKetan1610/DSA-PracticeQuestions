/*

Problem Statement:
You are given a square grid with n rows and n columns. Each cell contains either 0 or 1.
In an operation, you can select a cell of the grid and flip it (from 0→1 or 1→0). 
Find the minimum number of operations you need to obtain a square that remains the same when rotated 0∘, 90∘, 180∘ and 270∘.

Input:
Input Format
The first line contains a single integer t — the number of test cases.
The first line of each test case contains a single integer n — the size of the grid.
Then n lines follow, each with n characters ai,j — the number written in each cell.

Constraints:
1<=t<=10
1<=n<=100
0<=ai,j<=1

Output:
For each test case output a single integer — the minimum number of operations needed to make the square look the same rotated 0∘, 90∘, 180∘ and 270∘.


Sample Input:
1
3
010
110
010

Sample Output:
1

Hint:
In the first test case, we can perform one operation to change a2,3 = 1. 
Now, all rotations of the square are the same.

*/

function logic(a, n) {
  var ans = 0;
  for (var i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      var ones =
        a[i][j] + a[j][n - i - 1] + a[n - i - 1][n - j - 1] + a[n - j - 1][i];
      var zeros = 4 - ones;
      ans += Math.min(ones, zeros);
    }
  }
  console.log(ans / 4);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 0; i < t; i++) {
    var n = +input[line];
    line += 1;
    var arr = [];
    for (var j = 0; j < n; j++) {
      arr.push(input[line].trim().split("").map(Number));
      line++;
    }
    logic(arr, n);
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
