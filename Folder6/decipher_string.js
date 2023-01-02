/*

Description
You are given a ciphered string, you have to decipher the string.
For example, if the given string is "a2b1c2", then the deciphered string will be "aabcc".
Note: The string contains only lower-case letters and numbers.

Input
The first line of the input contains T, the number of test cases.
The first line of each test case contains N, the length of the string.
The next line contains the string, for which the decipher string is to be generated.

Constraints
1 <= T <= 10
1 <= N <= 200

Output
For each test case, print the deciphered string for the given string, on a new line.

Sample Input 1 
2
6
a2b1c2
6
a2z1a2

Sample Output 1
aabcc
aazaa

Hint
For the first sample test case, the deciphered string will be aabcc.

*/

function func(n, arr) {
  let str = [];
  let no = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      str.push(arr[i]);
    } else {
      no.push(arr[i]);
    }
  }
  let ans = [];

  for (let i = 0; i < no.length; i++) {
    for (let j = 0; j < no[i]; j++) {
      ans.push(str[i]);
    }
  }
  console.log(ans.join(""));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split("");
    func(n, arr);
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
