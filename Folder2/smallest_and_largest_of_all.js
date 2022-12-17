/*

Problem Statement:
Given an array, A, of N integers, print the smallest and largest element present in the array
YOU MUST NOT USE ANY BUILT-IN FUNCTION

Input:
Input Format:
The first line contains an integer, N (the number of integers in A). 
The second line contains N space separated integers describing A.

Constraints:
N<100

Output:
Output Format:
Print 2 integers in different lines 
where first integer represents the minimum of all elements and second integer represents the maximum of all


Sample Input:
4
-2 0 8 4

Sample Output :
-2
8

*/

//Enter code here
function findMinMax(n, arr) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr[0]);
  console.log(arr[n - 1]);
}

function runProgram(input) {
  // write code here
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  findMinMax(n, arr);
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
