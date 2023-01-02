/*

Description
Given an m x n 2D binary grid that represents a map of '1's (soldiers) and '0's (enemies), print the number of armies.
An army is represented by soldiers surrounded by enemies and is formed by connecting adjacent soldiers horizontally or vertically. You may assume all four edges of the grid are all surrounded by enemies.

Input
Input Format
First-line contains N and M, row and column of matrix respectively.
Following N lines contain M space-separated integers.

Constraints
1 <= N <= 300
1 <= M <= 300
0 <= arr[i][j] <= 1

Output
Print the count of armies.

Sample Input 1 
4 5
1 1 1 1 0
1 1 0 1 0
1 1 0 0 0
0 0 0 0 0

Sample Output 1
1

Sample Input 2 
4 5
1 1 0 0 0
1 1 0 0 0
0 0 1 0 0
0 0 0 1 1

Sample Output 2
3

Hint
In the first sample, there is only one army as all 1's are connected together.
In the second example, 3 armies are there which are not connected to each other and are also surrounded by enemies.

*/

function mainfun(arr, n, m) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        ans++;
        dfs(arr, i, j, n, m);
      }
    }
  }
  console.log(ans);
}

function dfs(arr, row, col, n, m) {
  if (col >= m || row >= n || row < 0 || col < 0 || arr[row][col] === 0) return;

  arr[row][col] = 0;
  dfs(arr, row - 1, col, n, m);
  dfs(arr, row + 1, col, n, m);
  dfs(arr, row, col - 1, n, m);
  dfs(arr, row, col + 1, n, m);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let arr = [];
  for (let i = 0; i < n; i++) {
    let mat = input[line++].trim().split(" ").map(Number);
    arr.push(mat);
  }
  mainfun(arr, n, m);
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
