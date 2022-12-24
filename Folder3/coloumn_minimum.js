/*

Problem Statement:
Given a matrix A of size n and m, 
    you have to print the array of size m where each element represents the minimum of ith column of the matrix A.

Input:
Input Format:
First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.
Following n lines contains m-integers.

Constraints:
1 <= n <= 100
1 <= m <= 100
1 <= arr[i][j] <= 10^4

Output:
Print the required array.

Sample Input:
3 3
1 2 3
4 5 6
7 8 9

Sample Output:
1 2 3

Hint:
Minimum of 1st column = 1
Minimum of 2nd column = 2
Minimum of 3rd column = 3

*/

function masai(arr1, mat) {
  // console.log(arr1);
  // console.log(mat);

  let r = arr1[0];
  let c = arr1[1];

  let x = [];
  for (let i = 0; i < c; i++) {
    let min = Infinity;
    for (let j = 0; j < r; j++) {
      if (mat[j][i] < min) {
        min = mat[j][i];
      }
    }
    x.push(min);
  }

  console.log(x.join(" "));
}

function runProgram(input) {
  input = input.split("\n");

  let arr1 = input[0].split(" ").map(Number);

  let mat = [];

  let line = 1;
  for (let i = 0; i < arr1[0]; i++) {
    let arr2 = input[line].split(" ").map(Number);

    mat.push(arr2);

    line++;
  }

  masai(arr1, mat);
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
