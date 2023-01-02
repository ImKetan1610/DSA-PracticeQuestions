/*

Description
Planet chinchapokli can be considered a planet of islands . Given a matrix of 1s and 0s which denotes planet chinchapokili where 1s denote land area and 0s denote water, count the number of islands on planet chinchapokli.

Input
1 <= T <= 10, the number of test cases
1 <= N,M <= 500 , rows and columns in the matrix
next N lines contain M characters, either a 0 or 1

Output
output a single integer which answers the problem for each test case.

Sample Input 1 
2
4 5
1 1 1 1 0
1 1 0 1 0
1 1 0 0 0
0 0 0 0 0
3 3
1 1 1
0 0 0
1 1 1

Sample Output 1
1
2

*/

let dfs = (mat, i, j, row, col) => {
  if (i < 0 || j < 0 || i > row - 1 || j > col - 1 || mat[i][j] != 1) {
    return;
  }
  if (mat[i][j] == 1) {
    mat[i][j] = 0;
    dfs(mat, i + 1, j, row, col); //right side
    dfs(mat, i - 1, j, row, col); //left side
    dfs(mat, i, j + 1, row, col); //upward side
    dfs(mat, i, j - 1, row, col); //downward side
  }
};

var numIslands = function (grid) {
  let count = 0;
  let row = grid.length;
  let col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        count++;
        dfs(grid, i, j, row, col);
      }
    }
  }
  console.log(count);
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let mat = [];
    for (let k = 0; k < n; k++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    numIslands(mat);
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
