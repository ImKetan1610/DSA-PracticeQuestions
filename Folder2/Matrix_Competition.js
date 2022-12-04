/*
Question:
You are given two matrices (2D array). 
The first array A (n rows and m columns) and second array B (i rows and j columns).
Output sum of the matrix which is greater than the sum of other matrix.
PLEASE DON'T CONVERT YOUR 2D ARRAY TO 1D ARRAY FOR THIS TASK** 
because this question is to make you comfortable in 2d array

Sample Input:
3 4
1 2 3 4
0 5 6 1
9 3 0 8
2 2
8 8
8 8
Sample Output:
42

Hint:
Sample 1 Explanation
Sum of elements present in the first matrix is 42 
and the sum of elements present in the second matrix is 32.
So, the answer is 42
*/

//input taking part
function runProgram(input) {
  let matrix1 = [];
  let matrix2 = [];
  let i = 0;
  input = input.trim().split("\n");
  let first = input[i].trim().split(" ").map(Number);
  let m = first[0];
  let n = first[1];
  i++;
  for (let a = 0; a < m; a++) {
    matrix1.push(input[i].trim().split(" ").map(Number));
    i++;
  }

  let second = input[i].trim().split(" ").map(Number);
  let o = second[0];
  let p = second[1];
  i++;
  for (let a = 0; a < o; a++) {
    matrix2.push(input[i].trim().split(" ").map(Number));
    i++;
  }

  Competition(m, n, matrix1, o, p, matrix2);
}

function Competition(m, n, matrix1, i, j, matrix2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let a = 0; a < m; a++) {
    for (let b = 0; b < n; b++) {
      sum1 += matrix1[a][b];
    }
  }
  for (let a = 0; a < i; a++) {
    for (let b = 0; b < j; b++) {
      sum2 += matrix2[a][b];
    }
  }

  sum1 > sum2 ? console.log(sum1) : console.log(sum2);
}

if (process.env.USER === "") {
  runProgram(" ");
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
    process.et(0);
  });
}
