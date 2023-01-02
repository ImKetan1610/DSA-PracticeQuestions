/*

Description
You are given a string of size N. You have to convert the string into its cipher form.
For example, the cipher form of a string "aabccd", will be "a2b1c2d1". The new generated string contains the characters, and the count of their occurrences in a consecutive manner.
Note: The string contains only lower-case characters.

Input
The first line of the input contains T, the number of test cases.
The first line of each test case contains N, the length of the string.
The next line contains the string, for which the cipher string is to be generated.

Constraints
1 <= T <= 10
1 <= N <= 100

Output
For each test case, print the cipher string for the given string, on a new line.

Sample Input 1 
2
5
aabcc
5
aazaa

Sample Output 1
a2b1c2
a2z1a2

Hint
In the first sample test case, the generated cipher string is "a2b1c2".
In the second sample test case, the generated cipher string is "a2z1a2"

*/

function find(N, str) {
  let bag = "";
  let i = 0;
  while (i < N) {
    let j = i;
    let count = 0;
    while (str[j] == str[i]) {
      count++;
      j++;
    }
    bag += str[i] + count;
    i = j;
  }
  console.log(bag);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 1; i <= tc; i++) {
    let N = +input[line++];
    let str = input[line++];
    find(N, str);
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
