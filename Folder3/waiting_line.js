/*

Problem Statement:
There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.
There are N operations that can be performed on this line. The operations are of following type:
E x : Integer x enters the queue (For such operation, print the new length of the queue.)
D      : The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)

Input:
Input Format:
First line consists of a single integer denoting N
Each of the following N lines contain one of the operation as described above.

Constraints:
1<=N<=100

Output:
Output Format:
For each enqueue operation print the new size of the queue.
And for each dequeue operation print two integers, deleted element (-1, if queue is empty) 
    and the new size of the queue.

Sample Input:
5
E 2
D
D
E 3
D

Sample Output:
1
2 0
-1 0
1
3 0

*/

let Q = [],
  R = -1,
  F = -1;
function Enqueue(X) {
  R++;
  Q[R] = X;
  console.log(R - F);
}

function Dequeue() {
  if (F == R) {
    console.log(-1, 0);
  } else {
    F++;
    X = Q[F];
    console.log(X, R - F);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let num = +input[0];
  let arr1 = [];
  for (let i = 0; i < num; i++) {
    let val = input[i + 1].trim().split(" ");
    let comm = val[0];
    let val1 = +val[1];
    if (comm == "E") {
      Enqueue(val1);
      // console.log("#",arr);
    } else if (comm == "D") {
      Dequeue();
      // console.log("*",arr);
    }
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
    runProgram(read);
    process.et(0);
  });
}
