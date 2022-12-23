/*

Problem Statement:
Given a strings, return true if a permutation of the string could form a palindrome.

Input:
Input Format:
The first line contains the number of testcases T
Each testcase contains a string S

Constraints:
1<= length of S <= 10^5
1<=T<=10

Output:
Print "Yes" if a permutation of S can be palindrome, else print "No"

Sample Input:
1
carerca

Sample Output:
Yes

Hint:
"carerca" has a permutation "carerac" which is palindrome

*/

function logic(n, arr) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  let count = 0;
  for (let key in obj) {
    if (obj[key] % 2 == 1) {
      count++;
    }
  }
  if ((n % 2 === 0 && count === 0) || (n % 2 === 1 && count === 1)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  tc = input[0];
  for (let i = 1; i <= tc; i++) {
    let arr = input[i].trim().split("");
    logic(arr.length, arr);
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
