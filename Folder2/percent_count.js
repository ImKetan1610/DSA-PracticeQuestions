/*

Problem Statement:
Given a strings and a character c, 
return the percentage of characters in s that equal c rounded down to the nearest whole percent.

Input:
Input Format:
The input consists of multiple testcases.
The first line contains an integer t - the number of testcases.
The next2*tlines contain the description of thettestcases.
The first line of each testcase contains an integern- the size of the string.
The second line consists of a stringsfollowed by the letterc.

Constraints:
1 ≤ t ≤ 10^2
1 ≤ n ≤ 10^5

s consists of lowercase English letters.
c is a lowercase English letter.

Output:
Output Format:
For each testcase output an integer the percentage of characters in s which are equal to c rounded down to the nearest integer.


Sample Input:
2
6
foobar o
4
jjjj k

Sample Output:
33
0

Hint:
First testcase
The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, 
so we return 33.

Second testcase
The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.

*/

function runProgram(input) {
  // Write Code Here
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let str = input[line++];

    //   console.log(n,str)
    res(n, str);
  }
}

function res(n, str) {
  let vr = str[str.length - 1];
  let obj = {};
  for (let i = 0; i < vr.length; i++) {
    if (obj[vr[i]] == undefined) {
      obj[vr[i]] = 0;
    }
  }
  for (let i = 0; i < n; i++) {
    if (obj[str[i]] != undefined) {
      obj[str[i]]++;
    }
  }
  let num = 0;
  for (let key in obj) {
    num = obj[key];
  }
  let per = Math.floor((num / n) * 100);
  console.log(per);
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
