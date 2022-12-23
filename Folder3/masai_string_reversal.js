/*

Problem Statement:
You are given a string S. Print the reversed version of the string.

Input:
Input Format:
The first and only line contains string S.

Constraints:
Length of string < 100

Output:
Reverse the provided string and output it.

Sample Input:
masaischool

Sample Output:
loohcsiasam

*/

function Reversal(Str) {
  let bag = "";
  for (let i = Str.length - 1; i >= 0; i--) {
    bag += Str[i];
  }
  console.log(bag);
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim();
  let Str = input;
  Reversal(Str);
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
