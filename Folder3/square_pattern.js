/*

Problem Statement:
Given an integer N, you need to print a square pattern as given in sample input/output.

Input
The first line contains a number N.

Constraints:
3 <= N <= 10

Output:
Print a square pattern for N.

Sample Input:
4

Sample Output:
* * * *
*     *
*     *
* * * *

Sample Input:
3

Sample Output:
* * *
*   *
* * * 

*/

function singleline(n) {
  let string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        string += "*" + " ";
      } else {
        if (j === 0 || j === n - 1) {
          string += "*" + " ";
        } else {
          string += " " + " ";
        }
      }
    }

    string += "\n";
  }

  console.log(string);
}

function runProgram(input) {
  input = +input;
  singleline(input);
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
