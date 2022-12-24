/*

Problem Statement:
You need to print pattern as given in Sample Input.
Note:- Make sure to check for spaces. In output, there is no spaces at end of each line.

Input:
First line contains N. (1<= N <= 10)

Output:
Print pattern for N.

Sample Input:
1

Sample Output:

\/\/

Sample Input:
4

Sample Output:

\      /\      /
 \    /  \    /
  \  /    \  /
   \/      \/

Hint:
Self Explanatory

*/

function printPattern(N) {
  //Enter code here

  for (let i = 1; i <= N; i++) {
    var temp = "";

    for (let j = 2; j <= i; j++) {
      temp += " ";
    }

    temp += "\\";

    for (let j = 1; j <= N - i; j++) {
      temp += "  ";
    }

    temp += "/";

    for (let j = 1; j <= i - 1; j++) {
      temp += "  ";
    }

    temp += "\\";

    for (let j = 1; j <= N - i; j++) {
      temp += "  ";
    }

    temp += "/";

    console.log(temp);
  }
}

function runProgram(input) {
  var N = Number(input);
  printPattern(N);
}

if (process.env.USERNAME === "Ajit") {
  runProgram(`4`);
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
