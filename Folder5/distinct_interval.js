/*

Description
Given a string S, find the number of substrings which have all unique characters i.e. each character present in the substring occurs only once

Input
Input Format
The first line contains the number of testcase T
Each testcase consists of string S

Constraints
1<=T<=10
1<=length of S <=10^5

Output
For each testcase print the number of substrings have unique characters

Sample Input 1 
2
aabcb
baaaa

Sample Output 1
9
6

Hint
In the first testcase the valid substrings are : a a b c b ab bc cb abc
In the second testcase the valid substrings are : b a a a a ba

*/

function interval(str, n) {
  let ans = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = i; j < n; j++) {
      bag += str[j];
      if (checkdistinct(bag)) {
        count++;
      } else {
        break;
      }
    }
  }

  console.log(count);
}

function checkdistinct(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) obj[str[i]] = 1;
    else return false;
  }
  return true;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let arr = input[line++].split("");
    let n = arr.length;
    interval(arr, n);
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
