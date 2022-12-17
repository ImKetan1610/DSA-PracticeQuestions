/*

Problem Statement:
Given an array of integers of length n, the task is to remove elements from the array to make array sorted. 
That is, remove the elements which do not follow an increasing order.

Input:
Input Format:
First line Consists of integer n.
Second line consists of n integers separated by spaces.

Constraints:
1 <= n <= 10^6

Output:
Print the sorted array.

Sample Input:
10
1 2 4 3 5 7 8 6 9 10

Sample Output:
1 2 4 5 7 8 9 10

*/

function removeElement(N, arr) {
  let res = "";
  let max = arr[0];
  for (let i = 0; i < N; i++) {
    if (arr[i] >= max) {
      res += max = arr[i] + " ";
    }
  }
  console.log(res);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  removeElement(N, arr);
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
