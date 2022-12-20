/*

Problem Statement:
Given an array of N space-separated integers, 
you have to sort the given array in increasing order of their absolute value integer square root. 
If two numbers have the same integer square root value then the smaller number comes first in the sorted array.

Integer Square Root Value 
of 4 is 2
of 5 is also 2
of 8 is also 2
of 9 is 3
of -9 is 3
of -8 is 2

Input:
Input Format:
First-line contains T, no of test cases.
First-line of each test case contains an integer n, the size of the array.
Second-line contains n space-separated integers.

Constraints:
1 <= T <= 10
1 <= n <= 1000
-1000 <= arr[i] <= 1000

Output:
For each test case, print the required sorted array, in a new line.

Sample Input:
2
3
4 9 1
5
8 4 5 11 9

Sample Output:
1 4 9
4 5 8 9 11

Hint:
In the first test case
Square root array will be like 2 3 1, 
after sorting this array we get 1 2 3 and then placing the corresponding number we get 1 4 9

In the second test case
Square root array will be 2 2 2 3 3, 
after sorting this array we get 2 2 2 3 3 and 
then place the corresponding number with the condition that if root are same 
then a smaller number is placed before larger therefore we get 4 5 8 9 11.

*/

function runProgram(input) {
  input = input.trim().split("\n");

  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;

    squareRootSorting(N, arr);
  }
}

function squareRootSorting(N, arr) {
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      let val1 = Math.floor(Math.abs(arr[j]) ** (1 / 2));
      let val2 = Math.floor(Math.abs(arr[j + 1]) ** (1 / 2));

      if (val1 > val2) {
        swap(arr, j, j + 1);
      } else if (val1 == val2 && arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  console.log(arr.join(" "));
}

function swap(arr, i, j) {
  temp = arr[i];

  arr[i] = arr[j];

  arr[j] = temp;
}

if (process.env.USERNAME === "Rajat") {
  runProgram(`Rajat`);
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
