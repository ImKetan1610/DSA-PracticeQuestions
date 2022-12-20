/*

Problem Statement:
Given an array of N integers. Find the minimum sum of K consecutive elements

Input:
Input Format:
The first line contains the number of testcases T
For each testcase, the first line contains the number N and K
The second line of each testcase consists of the elements of the array

Constraints:
1<=T<=10
1<=N<=10^5
1<=K<=N
-1000<=arr[i]<=1000

Output:
For each testcase print the minimum sum of K consecutive elements in a new line.

Sample Input:
2
5 3
9 9 -5 9 5 
5 4
2 7 6 2 -5 

Sample Output:
9
10

Hint:
For the first testcase the different sums of K consecutive elements are : 13 13 9
For the second testcase the different sums of K consecutive elements are : 17 10

*/

function logic(arr, n, k) {
  //console.log(arr,n,k)
  let max = 0;
  for (let i = 0; i < k; i++) {
    max += arr[i];
  }
  let cur = max;
  for (let i = k; i < n; i++) {
    cur -= arr[i - k] - arr[i];
    max = Math.min(cur, max);
  }
  console.log(max);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    logic(arr, n, k);
  }
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
