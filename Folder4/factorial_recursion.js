/*

Description:
The factorial of a positive integer N is the product of all positive integers less than or equal to n:
Given a number N your task is to write a program that calculates factorial of N

Input:
Input Format:
First and the only line contains N

Constraints:
N<15

Output:
Output the factorial value of N

Sample Input:
5

Sample Output:
120

Hint:
Sample Explanation:
Factorial of 5 = 5*4*3*2*1 = 120

*/

function find(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let ans = n * find(n - 1);
  return ans;
}

function runProgram(input) {
  let n = +input[0];
  let ans = console.log(find(n));
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
    runProgram(read);
    process.exit(0);
  });
}
