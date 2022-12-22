/*

Problem Statement:
Given two integer arrays pushed and popped each with distinct values, 
print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, 
or "NO" otherwise.


Input:
Input Format:
The first line contains the number of testcases - t
For each testcase:
The first line contains the number of values - n
The second line contains the pushed array
The third line contains the popped array

Constraints:
1<=t<=10
1<=n<=10^5
All elements of pushed and popped are distinct

Output:
Print "YES" if this could have been the result of a sequence of push and pop operations on an initially empty stack, 
or "NO" otherwise.

Sample Input:
2
5
1 2 3 4 5
4 5 3 2 1
5
1 2 3 4 5
4 3 5 1 2

Sample Output:
YES
NO

Hint:
Explanation 1 : We might do the following sequence:
push(1), push(2), push(3), push(4),
pop() -> 4,
push(5),
pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Explanation 2 : 1 cannot be popped before 2.

*/

function Valid(n, arr, size) {
  let x = 0;
  let stack = [];
  for (let i = 0; i < n; i++) {
    stack.push(arr[i]);
    while (stack[stack.length - 1] == size[x] && x < n) {
      stack.pop();
      x++;
    }
  }
  if (stack.length === 0) console.log("YES");
  else console.log("NO");
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let size = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

    // console.log(n,size,arr)
    Valid(n, size, arr);
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
