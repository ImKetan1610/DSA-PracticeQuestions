/*

Problem Statement:
Given a array A having N positive integers. 
Count all the subarrays of A having length X, 
such that each subarray has no integer greater than K.

Input:
First line: Single integer T denoting the number of test cases.
For each test case:
First line: Three space separated integers denoting the value of N, K and, X.
Next line : N single space separated integers denoting the elements of array A.
Constraints:
1 <= T<= 50
1<= N <= 1000000
1 <= A[ i ], K <= 100000
1 <= X <= N

Output:
For each test case, print in a new line a single integer denoting the number of subarrays.

Sample Input:
1
5 3 2
1 3 2 5 1

Sample Output:
2

Hint:
Given for the only test case,
N = 5, K = 3, X = 2

The following subarrays of length 2 have no integer greater then 3 in them :
[ 1, 3 ], [ 3, 2 ].

No other subarray is possible.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  tc = +input[0];
  line = 1;
  for (let i = 0; i < tc; i++) {
    data = input[line].trim().split(" ");
    n = +data[0];
    k = +data[1];
    x = +data[2];
    line++;

    a = input[line].trim().split(" ").map(Number);
    line++;

    xSubarrays(n, k, x, a);
  }
}

function xSubarrays(n, k, x, a) {
  let count = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    if (a[i] <= k) {
      temp++;
      if (temp == x) {
        count++;
        temp--;
      }
    } else {
      temp = 0;
    }
  }
  console.log(count);
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
