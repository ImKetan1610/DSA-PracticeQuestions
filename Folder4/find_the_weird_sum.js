/*

Description:
You are given an array of size N, which contains unique numbers. 
You need to find if there is a subsequence of an array whose sum is equal to the largest element in the array.
Note:- You cannot include the largest element while counting the sum.

Input:
First-line contains T, no of test cases.
First-line of each test case contains the N size of the array.
Second-line of each test case contains N spaced integers

Constraints:
1 <= T <= 10
1 <= N <= 20
0 <= A[i] <= 1005

Output:
For each test case print "Yes" if you find such sum or else print "No".

Sample Input:
3
3
1 2 3
4
0 1 2 3
4
2 3 6 10

Sample Output:
Yes
Yes
No

Hint:
For 1st test case:- 1+2 = 3
For 2nd test case:- 1+2 = 3
For the 3rd test case:- We cannot form sum = 10 with any combination.

*/

function sum(n, arr) {
  var max = null;
  for (let i = 0; i < n; i++) {
    if (max == null || arr[i] > max) {
      max = arr[i];
    }
  }
  var count = 0;
  var newarr = [];
  function subs(newarr, curr) {
    if (newarr.length > 0) {
      var sum = 0;
      for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] != max) {
          sum = sum + newarr[i];
        }
      }
      if (sum == max) {
        count++;
      }
    }
    if (curr == n) {
      return;
    }
    for (let i = curr; i < n; i++) {
      newarr.push(arr[i]);
      subs(newarr, i + 1);
      newarr.pop();
    }
  }
  subs(newarr, 0);
  if (count > 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function runProgram(read) {
  read = read.trim().split("\n");
  let tc = +read[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +read[line];
    line++;
    let arr = read[line].trim().split(" ").map(Number);
    line++;
    sum(n, arr);
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
