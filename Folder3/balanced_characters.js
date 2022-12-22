/*

Problem Statement:
Given a string consisting of lowercase and uppercase characters 
both and you have to consider lowercase as opening character and its corresponding uppercase as closing character. 
Now you have to find whether the given string is balanced or not.

Given string is balanced when
1) lower case characters must be closed by the uppercase of same characters.
2) lower case characters must be closed in the correct order.

Input:
Input Format:
First-line contains T, no of test cases.
First-line of each test case contains N, the length of the string s.
Second-line of each test case contains string s of length N.

Constraints:
1 <= T <= 10:
1 <= N <= 10^5

Output:
For each test case print True if the string is balanced and False if string is not balanced.

Sample Input:
5
2
aA
6
aAbBcC
2
cD
4
caCA
4
daAD

Sample Output:
True
True
False
False
True

Hint:
For the first test case, small "a" is closed by big "A" therefore string is balanced.
For the second test case, we can divide string into three parts "aA", "bB", and "cC" 
and as we can see separately all three are balanced therefore whole string is balanced.
For third test case, "c" can't be balanced by "D" therefore string is unbalanced.
For the fourth test case, the ordering of open 
and closed characters is not done properly therefore it is unbalanced string.

*/

function check(str, n) {
  let l = "abcdefghijklmnopqrstuvwxyz";
  let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let obj = {};
  for (let i = 0; i < 26; i++) {
    obj[l[i]] = u[i];
  }
  // console.log(obj)
  let s = [];
  for (let j = 0; j < n; j++) {
    if (obj[str[j]]) {
      s.push(obj[str[j]]);
    } else if (str[j] === s[s.length - 1]) {
      s.pop();
    }
  }

  // console.log(s)
  if (s.length === 0) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (m = 0; m < tc; m++) {
    let n = +input[line++];
    let arr = input[line++].trim();
    check(arr, n);
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
