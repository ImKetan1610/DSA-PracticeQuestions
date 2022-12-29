/*

Description:
There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.
There are N operations that can be performed on this line. The operations are of following type:
E x : Integer x enters the queue (For such operation, print the new length of the queue.)
D      : The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)

Input
Input Format
First line consists of a single integer denoting N
Each of the following N lines contain one of the operation as described above.

Constraints
1<=N<=100

Output
Output Format
For each enqueue operation print the new size of the queue.
And for each dequeue operation print two integers, deleted element (-1, if queue is empty) and the new size of the queue.

Sample Input 1 
5
E 2
D
D
E 3
D

Sample Output 1
1
2 0
-1 0
1
3 0

*/

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  var N = +input[0];
  var matrix = [];
  for (let i = 1; i <= N; i++) {
    var arr = input[i].trim().split(" ");
    matrix.push(arr);
  }
  Waiting_Line(matrix);
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

function Waiting_Line(matrix) {
  var queue = [];
  var front = 0;
  var rear = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == "E") {
      queue.push(matrix[i][1]);
      rear++;
      console.log(rear - front);
    } else if (matrix[i][0] == "D") {
      if (rear - front > 0) {
        console.log(queue[front] + " " + (rear - (front + 1)));
        front++;
      } else {
        console.log(-1 + " " + (rear - front));
      }
    }
  }
}
