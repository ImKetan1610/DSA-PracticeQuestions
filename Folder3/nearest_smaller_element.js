/*

Problem Statement:
You are given an array A of size N. For each element, 
in the array find the closest element with a smaller value, 
than the current value. If no such element exists, print -1. 
If two values are equidistant to the current value, 
print the one that occurs to the left of it. 
Refer the sample I/O for better understanding.


Input:
The first line contains T, the number of test cases. 
The first line of each test case contains N, the size of the array.
Next line contains N space separated integers denoting the closest smaller values, 
or -1, if no such values exist.

Constraints:
1 <= T <= 10
1 <= N <= 10^5
1 <= A[i] <= 10^4


Output:
For each test case, print N space separated integers, denoting the nearest smaller elements, 
or -1 if it does not exists, on a new line.


Sample Input:
1
8
39 27 11 4 24 32 32 1

Sample Output:
27 11 4 1 4 24 1 -1 

Hint:
In the sample test case, the array has 8 elements. 
The closest value to the first element 39, which is lesser than it is 27. 
Similarly, for 27 is 11, for 11 is 4, for 4 is 1, for 24 is 4, 
for the first instance of 32, the closest value is 24, 
and for the second instance, the closest value is 1, and for 1, 
the value is -1, as it has no values lesser than it in the array.

*/

function find(size, arr) {
  let stack = [];
  let stack1 = [];
  let ans1 = [];
  let ans2 = [];

  for (let i = 0; i < size; i++) {
    while (stack.length !== 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans1.push(-1);
    } else {
      ans1.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }

  for (let i = size - 1; i >= 0; i--) {
    while (stack1.length !== 0 && arr[stack1[stack1.length - 1]] >= arr[i]) {
      stack1.pop();
    }
    if (stack1.length === 0) {
      ans2.push(-1);
    } else {
      ans2.push(stack1[stack1.length - 1]);
    }
    stack1.push(i);
  }

  ans2 = ans2.reverse();

  let fans = [];

  for (let i = 0; i < ans1.length; i++) {
    if (ans1[i] === -1 && ans2[i] === -1) {
      fans.push(-1);
    } else if (ans1[i] === -1 && ans2[i] >= 0) {
      fans.push(arr[ans2[i]]);
    } else if (ans2[i] === -1 && ans1[i] >= 0) {
      fans.push(arr[ans1[i]]);
    } else {
      let a = Math.abs(i - ans1[i]);
      let b = Math.abs(i - ans2[i]);
      if (a > b) {
        fans.push(arr[ans2[i]]);
      } else if (a < b) {
        fans.push(arr[ans1[i]]);
      } else if (a === b) {
        fans.push(arr[ans1[i]]);
      }
    }
  }
  console.log(fans.join(" "));
}

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;

  for (let i = 0; i < tc; i++) {
    let size = +input[line];
    line++;
    let arr = input[line].split(" ").map(Number);
    line++;

    find(size, arr);
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
