/*

Description:
You'll be given a stack. 
You have to reverse the stack without using any inbuilt function or for and while loops. 
You have to reverse it by recursion only.

Input:
Input Format:
First n lines will contain the stack of length n.
You have to stop taking input when you find -1

Constraints:
n <= 1000:
0 <= element of the stack <= 100000

Output:
You have to display the reversed stack

Sample Input:
1
2
3
4
-1

Sample Output:
4
3
2
1

*/

function p1(stack, n) {
  if (n < 0) {
    return;
  }
  if (stack[n] != -1) {
    console.log(stack[n]);
  }

  p1(stack, n - 1);
  //  console.log(stack[n-1])
}

function runProgram(input) {
  input = input.trim().split("\n");
  stack = [];
  for (i = 0; i < input.length; i++) {
    stack.push(+input[i]);
  }

  p1(stack, input.length - 1);
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
