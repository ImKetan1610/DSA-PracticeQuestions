/*

Problem Statement:
Write an algorithm to determine if a number n is happy.
A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1are happy.

Input:
Input Format:
The first line contains an integer t - the number of testcases.
The next t lines contain the description of the t testcases.
The first and only line of each testcase contains an integer n.

Constraints:
1 <= t <= 30
1 <= n <= 2^31-1

Output:
Output Format:
For each testcase output Yes if the number is happy, else No on a new line.

Sample Input:
2
19
2

Sample Output:
Yes 
No

Hint:
First testcase
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

*/

function re(n) {
  let k = "No";
  let c = 0;
  while (c < 10) {
    n = n.toString();
    let sum = 0;
    for (let k = 0; k < n.length; k++) {
      sum += Number(n[k] ** 2);
    }
    n = sum;
    if (sum == 1) {
      k = "Yes";
      break;
    }
    c++;
  }
  console.log(k);
}

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let l = 1;
  for (let k = 0; k < tc; k++) {
    let arr = input[l++].split(" ");
    re(arr);
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
