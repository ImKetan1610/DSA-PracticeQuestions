/*

Description:
You are given a ciphered string, you have to decipher the string.
For example, if the given string is "a2b1c2", then the deciphered string will be "aabcc".
Note: The string contains only lower-case letters and numbers.

Input:
The first line of the input contains T, the number of test cases.
The first line of each test case contains N, the length of the string.
The next line contains the string, for which the decipher string is to be generated.

Constraints:
1 <= T <= 10
1 <= N <= 200

Output:
For each test case, print the deciphered string for the given string, on a new line.

Sample Input:
2
6
a2b1c2
6
a2z1a2

Sample Output:
aabcc
aazaa

Hint:
For the first sample test case, the deciphered string will be aabcc.
For the second sample test case, the deciphered string will be aazaa.

*/

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let t = +input[0];
  let l = 0;
  for (let i = 0; i < t; i++) {
    let N = +input[++l];
    let A = input[++l].split("");

    let bag = "";
    for (let i = 0; i < N; i = i + 2) {
      let ch = A[i];
      for (let j = 0; j < A[i + 1]; j++) {
        bag = bag + ch;
      }
    }
    console.log(bag);
  }
}

if (process.env.USER === "") {
  runProgram("");
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
    runProgramm(read);
    process.et(0);
  });
}
