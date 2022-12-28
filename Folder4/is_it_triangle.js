/*

Description:
Given the lengths of 3 sticks, find out if it is possible to form a triangle of a positive area. 
(Non-Degenerate Triangle).
Note:This problem was asked in Medianet

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains 3 integers a,b,c (1 ≤ a,b,c ≤ 100) — the lengths of the 3 sticks.

Output:
For each test case, print the answer: "Yes" if possible, else "No".

Sample Input:
4
4 5 13
7 1 8
2 5 4
2 2 2

Sample Output:
No
No
Yes
Yes

*/

function isItATriangle(arr) {
  if (
    arr[0] + arr[1] > arr[2] &&
    arr[1] + arr[2] > arr[0] &&
    arr[2] + arr[0] > arr[1]
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let testCases = +input[0];
  let lines = 0;
  for (let i = 0; i < testCases; i++) {
    let arr = input[++lines].trim().split(" ").map(Number);
    isItATriangle(arr);
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
