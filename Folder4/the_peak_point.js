/*

Description:
Given an array of size n, which is strictly increasing and then strictly decreasing in order. 
Find out the index (0-based) which is the peak of the array.
Note that the extremities are not considered as peak and there exists a peak which is not at index 0 or at n-1.

Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains a single integer n (3 ≤ n ≤ 100000).
The second line of the test case contains n integers (1 ≤ Ai ≤ 100000) and they are all distinct in nature.

Output:
For each test case, print the answer: The peak index.

Sample Input:
2
3
10 20 11
5
1 3 6 5 4

Sample Output:
1
2

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let x = peak(n, arr);
    console.log(x);
  }
}

function peak(n, arr) {
  let max = Infinity;

  for (let i = 1; i < n; i++) {
    let a = arr[i];
    if (arr[i - 1] < a && arr[i + 1] < a) {
      return i;
    }
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
