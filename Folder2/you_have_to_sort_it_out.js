/*

Problem Statement:
Given an array A of non-negative integers of size m. 
Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

Example:
A={4,5,3,7,1}
After sorting the new array becomes A={1,3,4,5,7}.
The required output should be "4 2 0 1 3"
NOTE: The indexing of the array starts with 0.
IMPORTANT: YOU CANNOT USE BUILT-IN SORT FUNCTION. 
    YOU HAVE TO WRITE A SORTING ALGORITHM - Merge sort or Quick Sort

Input:
Input Format:
The first line of input consists of the size of the array
The next line consists of the array of size m

Constraints:
1<=m<=1000
0<=A[i]<=1000

Output:
Output consists of a single line of integers

Sample Input:
5
4 5 3 7 1

Sample Output:
4 2 0 1 3

*/

function solve(n, arr) {
  new_arr = arr.map((item) => {
    return item;
  });
  new_arr.sort(function (a, b) {
    return a - b;
  });

  let bag = [];
  for (let i = 0; i < new_arr.length; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] === new_arr[i]) {
        bag.push(j);
        arr[j] = "X";
      }
    }
  }
  console.log(bag.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  n = +input[0];
  arr = input[1].trim().split(" ").map(Number);
  solve(n, arr);
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
