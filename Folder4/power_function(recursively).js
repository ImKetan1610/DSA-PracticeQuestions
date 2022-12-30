/*

Description:
Given two integers a and b, we need to find the value of a^b recursively.
Expected Time Complexity - O(logb).

Input:
The first line of the input contains two integers a and b (1 ≤ a ≤ 10) and (0 ≤ b ≤ 9).

Output:
For each test case, print the answer: The value of a^b.

Sample Input:
2 4

Sample Output:
16

*/

function Power(x, n) {
  let pow = 1;
  for (let i = 0; i < n; i++) {
    pow = pow * x;
  }

  return pow;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [x, n] = input[0].trim().split(" ").map(Number);
  var y = Power(x, n);
  console.log(y);
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
