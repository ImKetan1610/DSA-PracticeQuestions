/*

Description:
Given a string, S. Find the length of the string using recursion.
Note: You are not allowed to use the length built-in property.

Input:
Input Format:
The single line  consists of string S

Constraints:
1<= S length <= 200

Output:
Print length of the given string S.

Sample Input:
masaischool

Sample Output:
11

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[0];

  //console.log(str);
  LengthRecursion(str);
  console.log(LengthRecursion(str));
}

function LengthRecursion(str) {
  if (str === "") {
    return 0;
  } else {
    return LengthRecursion(str.substring(1)) + 1;
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
