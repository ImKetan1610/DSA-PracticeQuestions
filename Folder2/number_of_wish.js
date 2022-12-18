/*

Problem Statement:
You are given an string of size N, of characters from 'a' to 'z'.
You need to print number of times you can make "wish", using characters from string. 
You can use a character only once from the string.
[UseKey-Value pair based data structure]

Input:
First line contains T, no of test cases.
First line of each test case contains N, size of string
Second line of each test case contains string S.

Constraints:
1 <= T <= 10
1 <= N <= 10^6

Output:
For each test case, print number of times you can make "wish"

Sample Input:
2
7
wishash
8
wishwish

Sample Output:
1
2

*/

//Enter code here
function check(N, str) {
  let obj = {};
  let name = "wish";
  for (let i = 0; i < name.length; i++) {
    if (obj[name[i]] == undefined) {
      obj[name[i]] = 0;
    }
  }
  for (let i = 0; i < N; i++) {
    if (obj[str[i]] != undefined) {
      obj[str[i]]++;
    }
  }
  let min = Infinity;
  for (let k in obj) {
    if (obj[k] < min) {
      min = obj[k];
    }
  }
  console.log(min);
}

function runProgram(input) {
  // Write Code Here
  input = input.trim().split("\n");
  tc = input[0];
  line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line];
    line++;
    let str = input[line];
    line++;
    check(N, str);
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
