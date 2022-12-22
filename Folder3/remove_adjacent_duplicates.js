/*

Problem Statement:
You are given a string s consisting of lowercase English letters. 
A duplicate removal consists of choosing two adjacent and equal letters and removing them.
We repeatedly make duplicate removals on s until we no longer can.
Print the final string after all such duplicate removals have been made. 
It can be proven that the answer is unique.

Input:
Input Format:
The first line contains the number of testcases - T
For each testcase:
The first line contains the length of the string - n
The second line contains the string consisting of lowercase letters

Constraints:
1<=t<=10
1<=n<=10^5

Output:
Print the final string after all such duplicate removals have been made.

Sample Input:
1
6
abbaca

Sample Output:
ca

Hint:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move. 
The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

*/

const check = (n, str) => {
  let stack = [];
  for (let i = 0; i <= n - 1; i++) {
    if (stack[stack.length - 1] == str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  console.log(stack.join(""));
};

function runProgram(input) {
  // Write Code Here
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i <= tc - 1; i++) {
    let n = +input[line];
    line++;
    let str = input[line];
    line++;
    check(n, str);
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
