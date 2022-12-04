/*

Problem Statement:
You are given an array of N integers and a single integer K. 
You need to find out if there is a subarray, which has the sum exactly as K.

Input:
First-line contains T, no of test cases.
First-line of each test case contains N, the size of the array, and K.
Second-line of each test case contains N spaced integers, elements of an array.

Constraints:
1 <= T <= 10
1 <= N <= 10^5
1 <= A[i] <= 10^12
1 <= K <= 10^12

Output
For each test case print "Yes", if there exists a subarray with sum K or else print "No".

Sample Input:
3
5 3
1 2 1 3 4
4 5
1 2 1 3
3 2
1 2 1

Sample Output:
Yes
No
Yes

*/
//Enter code here

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let size = input[line].trim().split(" ").map(Number);
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    let n = size[0];
    let k = size[1];
    sumOfSubarr(n, k, arr);
  }
}

function ans(n, k, arr) {
  let sum = 0;
  let high = 0;
  for (let low = 0; low < n; low++) {
    while (sum < k && high < n) {
      sum += arr[high];
      high++;
    }
    if (sum == k) {
      return true;
    }
    sum = sum - arr[low];
  }
  return false;
}

function sumOfSubarr(n, k, arr) {
  if (ans(n, k, arr) == true) {
    console.log("Yes");
  } else {
    console.log("No");
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
