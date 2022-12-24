/*

Problem Statement:
Given an integer N, and a pattern. Print the pattern as given in the sample I/O.
Note: Please check for spaces.

Input:
The first and the only line of the input contains the value ofN.

Constraints:
1 <=N<= 25

Output:
Print the pattern as given in the sample test case.

Sample Input:
5

Sample Output:
* * * * *
*       *
*       *
*       *
*       *

*/

function square(n) {
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0 || j == n - 1) {
        bag += "* ";
      } else {
        bag += "  ";
      }
    }
    console.log(bag);
  }
}

function runProgram(input) {
  let n = +input;
  square(n);
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
