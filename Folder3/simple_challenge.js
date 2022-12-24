/*

Problem Statement:
Given an array 'A' consisting of 'n' integers, find the maximum value of the following expression:
|Ai - Aj| + |i - j|
where, 0<= i,j < n and Ai, Aj are the Array elements.

Input:
Input Format
First line of input contains an integer T denoting the number of test cases.
Each test case contains two lines, the first line contains integer n where n is the number of elements in the array
Second line contains n space separated integers Ai.

Constraints:
1<=T<=100
1<=n<=100000
0<=Ai<=100000

Output:
Print the maximum value of the above give expression, for each test case separated in a new line.

Sample Input:
2
3
1 1 1
4
1 2 3 1

Sample Output:
2
4

Hint:
Sample 1 Explanation
For the first sample case, if we choose i=0 and j=2; then we get the maximum value as 2.
In the second test case, if we choose i=0 and j=2, we get the maximum value as 4.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (var i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].split(" ").map(Number);
    soso(n, arr);
  }
}

function soso(n, arr) {
  var temp1, temp2;
  var max1 = Number.MIN_VALUE,
    max2 = Number.MIN_VALUE;
  var min1 = Number.MAX_VALUE,
    min2 = Number.MAX_VALUE;
  for (i = 0; i < n; i++) {
    temp1 = arr[i] + i;
    temp2 = arr[i] - i;
    max1 = Math.max(max1, temp1);
    min1 = Math.min(min1, temp1);
    max2 = Math.max(max2, temp2);
    min2 = Math.min(min2, temp2);
  }
  console.log(Math.max(max1 - min1, max2 - min2));
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
