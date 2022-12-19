/*

Problem statement:
You are given an array of size N. 
You need to find the largest number X such that the array has both +X and -X in it.

Input:
Input Format:
First-line contains T, no of test cases.
The first line of each test case contains N, the size of the array.
The second line of each test case contains N space-separated numbers, elements of the array.

Constraints:
1 <= T <= 10
1 <= N <= 10^5
-10^5 <= A[i] <= 10^5, A[i]!=0

Output:
For each test case, print X or else print -1, if it doesn't exist.

Sample Input:
2
5
2 1 -1 -2 3
5
-3 2 -4 4 -2

Sample Output:
2
4

*/

function Largest(arr, N) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let final;
  let flag = false;
  let l = 0;
  let r = N - 1;
  while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum == 0) {
      flag = true;
      final = Math.max(arr[l], arr[r]);
      break;
    } else if (sum > 0) {
      r--;
    } else {
      l++;
    }
  }
  if (flag) {
    console.log(final);
  } else {
    console.log(-1);
  }
}

function runProgram(input) {
  input = input.split("\n");
  var tc = +input[0];
  var line = 1;
  for (let x = 0; x < tc; x++) {
    var N = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    Largest(arr, N);
  }
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
