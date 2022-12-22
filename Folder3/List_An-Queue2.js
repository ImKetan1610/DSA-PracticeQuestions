/*

Problem statement:
You need to implement a list using queue data structure. 
You can only use queue.get() and queue.put() methods.
Note- import and the use queue data structure.

Input:
The first line contains the number of operations (t).
Next t lines contains commands for the list.
Eg- Push 3 means add 3 in the list
Pop means to remove the last element of the list and print it on the screen
Note-If the list is empty print- 'Empty' (Without the quotes)
t <= 500000

Output:
Print the last element as a single integer on the screen.

Sample Input:
3
Push 4
Push 5
Pop

Sample Output:
5

Hint:
After two push operations the list would look like - [4,5], popping it should return 5

*/

let q = [];
let store = [];

let listAndQueue = (string) => {
  if (string[0] == "Push") {
    q.push(string[1]);
  } else if (string[0] == "Pop") {
    if (q.length === 0) {
      console.log("Empty");
    } else {
      console.log(q.pop());
    }
  }
};

function runProgram(input) {
  // Write Code Here
  input = input.split("\n");
  var line = 0;
  var n = +input[line++];
  while (n-- > 0) {
    var string = input[line++].split(" ");
    listAndQueue(string);
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
