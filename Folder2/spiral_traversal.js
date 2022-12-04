/*

Problem Statement:
You are given an integer n. 
The next line is an array A which contains n*n elements. 
The spiral traversal of a square matrix of dimension (n x n) results in the given array.
Calculate the sum of all elements which are on the diagonals of the square matrix.

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains a single integer n (1 ≤ n ≤ 100)
The second line contains n*n integers (1 ≤ Ai ≤ 1000) - The spiral traversal of a square matrix of dimension n x n.

Output:
For each test case, print the answer: The sum of elements present in the diagonals of the matrix.

$
Sample Input:
3
1
1
2
1 2 3 4
3
1 2 3 4 5 6 7 8 9

Sample Output:
1
10
25
$

$
Sample Input:
1
4
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

Sample Output:
68
$

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    spiralTraversal(arr, n);
  }
}

function spiralTraversal(arr, n) {
  let ansArray = [];
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push("x");
    }
    ansArray.push(temp);
  }
  let index = 0;
  let top = 0,
    left = 0,
    bottom = ansArray.length - 1,
    right = ansArray.length - 1;
  while (index < arr.length) {
    for (let i = left; i <= right; i++) {
      ansArray[top][i] = arr[index++];
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      ansArray[i][right] = arr[index++];
    }
    right--;
    for (let i = right; i >= left; i--) {
      ansArray[bottom][i] = arr[index++];
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      ansArray[i][left] = arr[index++];
    }
    left++;
  }
  let sum = 0;
  for (let i = 0; i < ansArray.length; i++) {
    sum += ansArray[i][i];
    for (let j = 0; j < ansArray.length; j++) {
      if (i + j == ansArray.length - 1 && i != j) {
        sum += ansArray[i][j];
      }
    }
  }
  console.log(sum);
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
