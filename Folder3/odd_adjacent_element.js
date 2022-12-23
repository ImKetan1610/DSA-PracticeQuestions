/*

Problem Statement:
Given a matrix A, you have to transform the given matrix 
    such that you have to make A[i][j] = -A[i][j] if its 2 or more adjacent elements are odd.

Input:
Input Format:
First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.
Following n lines contains m-integers.

Constraints:
1 <= n <= 100
1 <= m <= 100
1 <= arr[i][j] <= 10^4

Output:
Print the resultant matrix.

Sample Input:
3 3
1 2 3
4 5 6
7 8 9

Sample Output:
1 -2 3
-4 5 -6
7 -8 9

Hint:
Element 2, 4, 6, and 8 are surrounded by 2 or more odd elements.

*/

function fun(n, m, arr) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let count = 0;
      if (j - 1 >= 0) {
        if (arr[i][j - 1] % 2 != 0) {
          count++;
        }
      }
      if (j + 1 < m) {
        if (arr[i][j + 1] % 2 != 0) {
          count++;
        }
      }
      if (i - 1 >= 0) {
        if (arr[i - 1][j] % 2 != 0) {
          count++;
        }
      }
      if (i + 1 < n) {
        if (arr[i + 1][j] % 2 != 0) {
          count++;
        }
      }
      if (count >= 2) {
        arr[i][j] = -arr[i][j];
      }
      count = 0;
    }
  }
  arr.forEach((e) => console.log(e.join(" ")));
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let mat = [];
  for (let i = 0; i < n; i++) {
    mat.push(input[line++].trim().split(" ").map(Number));
  }
  fun(n, m, mat);
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
    runProgramm(read);
    process.et(0);
  });
}
