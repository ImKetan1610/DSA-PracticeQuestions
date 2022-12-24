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
/\

Sample Input:
4

Sample Output:

   /\
  /  \
 /    \
/      \

Hint:
No of lines in output would be N.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];

  for (var i = 0; i < n; i++) {
    bag = "";
    for (var j = n - 1; j > i; j--) {
      bag += " ";
    }
    bag += "/";

    for (j = 0; j < 2 * i; j++) {
      bag += " ";
    }

    bag += "\\";

    console.log(bag);
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
