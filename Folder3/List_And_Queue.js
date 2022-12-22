/*

Problem Statement:
You need to implement a queue data structure with a list using plain list methods. 
You can only use list.append() and list.pop() methods in this question.
Note-You can't use list.pop(index) too in this question.

Input:
The first line contains the number of operations (t).
Next t lines contains commands for the queue.
Eg- E 3 means add 3 in the queue
D means to remove the front element of the queue and print it on the screen
Note-If the queue is empty print- 'Empty' (Without the quotes)

Output:
Print the front element as a single integer on the screen.

Sample Input:
4
E 2
E 3
D
D

Sample Output:
2
3

*/

function logic(n, cond, value) {
  let arr = new Array(n);
  let front = 0;
  let rear = 0;
  let count = 0;

  function enque(val) {
    if (count === n) {
      return;
    }

    arr[front] = val;
    front = (front + 1) % n;
    count++;
  }

  function deque() {
    if (count === 0) {
      console.log("Empty");
      return;
    }

    console.log(arr[rear]);
    rear = (rear + 1) % n;
    count--;
  }

  for (let i = 0; i < n; i++) {
    if (cond[i] == "E") {
      enque(value[i]);
    } else if (cond[i] == "D") {
      deque();
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  var arr1 = [];
  var arr2 = [];
  for (let i = 0; i < tc; i++) {
    var size = input[line++].trim().split(" ");
    arr1.push(size[0]);
    arr2.push(size[1]);
  }
  logic(tc, arr1, arr2);
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
