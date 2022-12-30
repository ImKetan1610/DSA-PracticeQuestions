/*

Description:
Given an integer N. 
In how many ways you can subtract numbers 1, 2, and, 5 from N such that value of N reduces to 0. 
(Check sample input for more clarity)

Input:
First line: Single integer denoting the value of T - the number of test cases.
For each test case:
First line: Single integer denoting the value of N.

Constraints::
1 <= T <= 100
1<= N <= 30

Output:
For each test case, print in a new line, a single integer denoting the required number of ways.

Sample Input:
1
4

Sample Output:
5

Hint:
No of the ways for N=4 are:-
(4-1) = 3 --> ( 3 - 1) = 2 --> ( 2 - 1 ) = 1 --> ( 1-1) = 0
(4-1) = 3 --> ( 3 - 1) = 2 --> ( 2 - 2 ) = 0
(4-1) = 3 --> ( 3 - 2) = 1 --> ( 1-1) = 0
(4-2) = 2 --> ( 2 - 1 ) = 1 --> ( 1-1) = 0
(4-2) = 2--> ( 2 - 2 ) = 0

*/

function Ways(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }

  return Ways(n - 1) + Ways(n - 2) + Ways(n - 5);
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var n = +input[line++];

    console.log(Ways(n));
  }
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
