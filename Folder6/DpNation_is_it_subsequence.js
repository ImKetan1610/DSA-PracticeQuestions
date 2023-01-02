/*

Description
Given two strings, s1 and s2, you need to print YES if s1 is a subsequence of s2 else NO.

Input
1<=T<=10
1<=|S1|<=100
1<=|S2|<=10000

Output
output YES or NO for each test case.

Sample Input:
2
abc
adbce
ax
xaa

Sample Output:
YES
NO

*/

function runProgram(input) {
  data = input.trim().split("\n");
  let tc = +data[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let t = data[line++];
    let s = data[line++];
    check(t, s);
  }
  function check(s, t) {
    let counter = 0;

    for (let i = 0; i < t.length; i++) {
      if (t[i] === s[counter]) {
        counter++;
      }
    }
    console.log(counter === s.length ? "YES" : "NO");
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
