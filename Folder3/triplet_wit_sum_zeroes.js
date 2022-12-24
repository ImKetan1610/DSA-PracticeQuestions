/*

Problem Statement:
You are given an array A of size N.

You need to count all triplets i,j,k, such that 0<=i < j < k <= N-1 and A[i]+A[j]+A[k]=0


Input
First line contains T, no of test cases.

First line of each test case contains N and M, size of array and integer.

Second line of each test case contains N spaced integers of array A.

Constraints

1 <= T <= 10

3 <= N <= 10000

1 <= A[i] <= 1000


Output
For each test case, print the count on each test case.


Sample Input 1 

3
-1 -2 3
Sample Output 1

1
Sample Input 2 

4
-1 -1 -2 3
Sample Output 2

2

*/

function countpairs(n, arr) {
  //  var m=new Map();
  var c = 0;

  for (let i = 0; i < n - 1; i++) {
    var s = new Set();
    for (let j = i + 1; j < n; j++) {
      let x = -(arr[i] + arr[j]);
      if (s.has(x)) {
        c++;
      } else {
        s.add(arr[j]);
      }
    }
  }
  console.log(c);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  // var n=x[0];var k=x[1];
  var arr = input[1].trim().split(" ").map(Number);
  countpairs(n, arr);
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
