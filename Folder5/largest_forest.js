/*

Description
Recursion
Captain Cooper is stuck in a Jungle and he needs to transmit the information of largest Jungle to the Murphy, So that he can be rescued.
Imagine the field is a 2D plane. Each cell is either water 'W' or a tree 'T'.
A forest is a collection of connected trees.
Two trees are connected if they share a side i.e. if they are adjacent to each other.
Your task is, given the information about the field, print the size of the largest forest.
Size of a forest is the number of trees in it. See the sample case for clarity

Input
Input Format :
First line contains the size of the matrix N.
The next N lines contain N characters each, either 'W' or 'T'.

Constraints :
1<=N<=1000

Output
Print the size of the Largest Forest.

Sample Input 1 
5
TTTWW
TWWTT
TWWTT
TWTTT
WWTTT

Sample Output 1
10

*/

let ans = 0;

function func(arr, r, c, count) {
  if (
    c < 0 ||
    r < 0 ||
    r >= arr.length ||
    c >= arr[r].length ||
    arr[r][c] == "W"
  ) {
    return 0;
  }
  let temp = 1;
  arr[r][c] = "W";
  temp += func(arr, r + 1, c);
  temp += func(arr, r - 1, c);
  temp += func(arr, r, c + 1);
  temp += func(arr, r, c - 1);
  return temp;
}

function forest(N, arr) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] == "T") {
        ans = Math.max(ans, func(arr, i, j));
      }
    }
  }
  console.log(ans);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(input[i + 1].trim().split(""));
  }
  forest(N, arr);
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
