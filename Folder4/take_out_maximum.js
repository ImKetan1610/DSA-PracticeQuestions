/*

Description:
Given an array of integers and a number k, find the maximum sum of a subarray of size k.
Note:This problem was asked in Medianet

Input:
Input Format:
First line consists of two integers n and k separated by space
Second line consists of n integers separated by spaces.

Constraints:
1 <= n <= 10^7
1 <= k <= 10^6

Output:
Print the maximum sum of a subarray of size k.

Sample Input:
10 3
-1 -1 -2 1 -2 4 1 9 3 9

Sample Output:
21

*/

function maxsum(array, n, k) {
  var sum = 0;
  for (i = 0; i < k; i++) {
    sum += array[i];
  }
  var sum1 = sum;
  for (i = k; i < n; i++) {
    sum1 += array[i] - array[i - k];
    if (sum < sum1) {
      sum = sum1;
    }
  }
  console.log(sum);
}

function runProgram(input) {
  var out = input.split("\n");
  var out1 = out[0].split(" ");
  var n = Number(out1[0]);
  var k = Number(out1[1]);
  var array = out[1].split(" ").map(Number);
  maxsum(array, n, k);
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
