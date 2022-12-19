/*

Problem Statement:
Given a matrix A, you have to transform the given matrix such that 
you have to make A[i][j] = -A[i][j] if its 2 or more adjacent elements are odd.

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
Element 2,4,6,and 8 are surrounded by 2 or more odd elements.

*/

function found(mat, n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let count = 0;

      if (j !== 0 && mat[i][j - 1] % 2 !== 0) {
        count++;
      }
      if (i !== 0 && mat[i - 1][j] % 2 !== 0) {
        count++;
      }
      if (i !== n - 1 && mat[i + 1][j] % 2 !== 0) {
        count++;
      }
      if (j !== m - 1 && mat[i][j + 1] % 2 !== 0) {
        count++;
      }
      if (count >= 2) {
        mat[i][j] = -mat[i][j];
      }
    }
  }
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = 0; j < m; j++) {
      bag += mat[i][j] + " ";
    }
    console.log(bag);
  }
}

function runProgram(input) {
  // Write Code Here
  input = input.split("\n");

  let [n, m] = input[0].trim().split(" ").map(Number);
  let l = 1;

  let mat = [];
  for (let j = 0; j < n; j++) {
    let a = input[l].trim().split(" ").map(Number);
    l++;
    mat.push(a);
  }
  found(mat, n, m);
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
