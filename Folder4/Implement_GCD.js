/*

Description:
Implement the GCD Function using recursion. 
    Given two integers a and b, find the greatest common divisor of a and b.
The approach which uses logarithmic time complexity is expected here.

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
    Then t test cases follow.
The first line of each test case contains two integers a and b (1 ≤ a, b ≤ 1000000000).

Output:
For each test case, print the answer: GCD of the two numbers.

Sample Input:
2
6 9
2 25

Sample Output:
3
1

*/

function check(a, b) {
  if (a == 0) {
    return b;
  }
  return check(b % a, a);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let size = input[line].trim().split(" ").map(Number);
    let a = size[0];
    let b = size[1];
    line++;
    let x = check(a, b);
    console.log(x);
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
