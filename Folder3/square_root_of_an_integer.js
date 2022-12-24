/*

Problem Statement:
You are given an integer N, find the square root of the given integer N. 
    If the integer is not a perfect square, print the floor value of the given integer.
Note:- The floor value is the largest integer value lesser than a given number K. 
    For example if the value ofK = 3.679, the floor value ofKis3.
Note:You are not allowed to use any inbuilt function.
Note: Try printing output only once, then individually for each test case.

Input:
The first line of the input containsT, the number of test cases.
The first and the only line of each test case contains,N, the value of the given integer

Constraints:
1 <=T<= 1000000
0 <=N<= 1000000000

Output:
For each test case, print the square root of the integer N given if it is a perfect square, 
    else print the floor value of it, on a new line.

Sample Input:
2
4
8

Sample Output:
2
2

Hint:
In the sample test cases, the value ofT = 2
In the first test cases, the value ofN = 4, 
    therefore, the square root of 4 is2, which is the required output.
In the second test cases, the value ofN = 8therefore, the square root of 8 is2.82842..., 
    therefore, the floor value of it is2, which is the required output.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;

  for (var i = 0; i < tc; i++) {
    var n = input[line++];
    console.log(solve(n));
  }
}

function solve(n) {
  if (n === 1) return n;

  var x = 0;
  var y = n / 2;
  while (y !== x) {
    x = y;
    y = (n / x + x) / 2;
  }

  var z = y.toString().split(".");
  return +z[0];
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
