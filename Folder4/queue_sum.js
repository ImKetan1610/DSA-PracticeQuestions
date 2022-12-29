/*

Description:
You are given a queue, and an operation X can be performed on a queue. 
The operation X, is of two types
X = 1 -> A value is inserted into the queue.
X = 2-> The value at the front of the queue is removed, if the queue is not empty.
Every time a query of type 2 is executed, the value removed from the queue is added to a variable S. 
If the query is of type 2, and the queue is empty, then the value of S is decremented by 1.
You are given Q queries which need to be executed on the queue. 
Find the value of S, after all the queries are executed.
The value of S, initially is S = 0.

Input:
The first line contains Q, the number of queries to be executed. 
Next Q line contains query of type 1 or 2. 
For query of type 1, another value Y is provided, which denotes the value to be inserted into the queue.

Constraints:
1 <= Q <= 100
1 <= X <= 2
1 <= Y <= 100

Output:
Print the value of S, after all the queries are executed.

Sample Input:
3
1 2
2
2

Sample Output:
1

Hint:
In the sample test case, three queries are to be executed. 
The first query is of type 1, so the value Y = 2 is pushed into the queue. 
Initially, the value of S = 0.
The next query is of type 2, so the value at the front of the queue is removed, 
    therefore the value of S becomes S =  2.
The next query is of type 2 again , but the queue is empty. 
Therefore, the value of S becomes  S = 1. 
Therefore, the output is 1.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  let Q = [];
  let S = 0;
  for (let i = 0; i < tc; i++) {
    let [q, v] = input[line++].trim().split(" ").map(Number);
    if (q === 1) {
      Q.push(v);
    } else if (q === 2) {
      if (Q.length !== 0) {
        x = Q.shift();
        S += x;
      } else {
        S -= 1;
      }
    }
  }
  console.log(S);
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
