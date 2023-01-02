/*
Description
Given a n by n matrix. You have to rotate the elements of each ring of the matrix in the clockwise direction one place.

Input
Input Format
First line will contain a single number n
Next n lines will contain the matrix

Constraints
n<=1000
Elements of the matrix <=10000

Output
You have to display the rotated matrix

Sample Input 1 
4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4

Sample Output 1
1 1 2 3
1 2 2 4
1 3 3 4
2 3 4 4

Hint
Consider this matrix in the form of two rings and rotate the ring by one place in the clockwise direction

*/

function rotatematrix(n, mat) {
  let m = n;
  let row = 0,
    col = 0;
  let prev, curr;
  while (row < m && col < n) {
    if (row + 1 == m || col + 1 == n) {
      break;
    }
    prev = mat[row + 1][col];
    for (let i = col; i < n; i++) {
      curr = mat[row][i];
      mat[row][i] = prev;
      prev = curr;
    }
    row++;
    for (let i = row; i < m; i++) {
      curr = mat[i][n - 1];
      mat[i][n - 1] = prev;
      prev = curr;
    }
    n--;
    if (row < m) {
      for (let i = n - 1; i >= col; i--) {
        curr = mat[m - 1][i];
        mat[m - 1][i] = prev;
        prev = curr;
      }
    }
    m--;
    if (col < n) {
      for (let i = m - 1; i >= row; i--) {
        curr = mat[i][col];
        mat[i][col] = prev;
        prev = curr;
      }
    }
    col++;
  }

  for (let j = 0; j < mat.length; j++) {
    console.log(mat[j].join(" "));
  }
}

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let line = 1;
  let mat = [];
  for (let i = 0; i < n; i++) {
    mat.push(input[line].split(" ").map(Number));
    line++;
  }
  rotatematrix(n, mat);
}

if (process.env.USER === "") {
  runProgram("");
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
