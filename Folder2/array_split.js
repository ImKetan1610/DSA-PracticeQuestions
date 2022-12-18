/*

Problem Statement:
You are given a 0-indexed integer array Arr of length n.
Arr contains a valid split at index i if the following are true:
The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
There is at least one element to the right of i. That is, 0 <= i < n - 1.
Find the number of valid splits in Arr.

Input:
Input Format:
The first line contains the number of testcases, T
For each testcase:
The first line contains the size of array, n
The second line contains the elements of Arr.

Constraints:
1<=T<=10
1<=n<=10^5
-10^4<=Arr[i]<=10^4

Output:
For each testcase print the number of valid splits in Arr.

Sample Input:
1
4
10 4 -8 7

Sample Output:
2

Hint:
There are three ways of splitting nums into two non-empty parts:

Split nums at index 0. Then, the first part is [10], and its sum is 10. The second part is [4,-8,7], and its sum is 3. Since 10 >= 3, i = 0 is a valid split.
Split nums at index 1. Then, the first part is [10,4], and its sum is 14. The second part is [-8,7], and its sum is -1. Since 14 >= -1, i = 1 is a valid split.
Split nums at index 2. Then, the first part is [10,4,-8], and its sum is 6. The second part is [7], and its sum is 7. Since 6 < 7, i = 2 is not a valid split. Thus, the number of valid splits in nums is 2.

*/

function fun(n, arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  let new_sum = sum;
  main = 0;
  for (let i = 0; i < n - 1; i++) {
    main += arr[i];
    new_sum -= arr[i];
    if (main >= new_sum) {
      count++;
    }
  }
  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  tc = Number(input[0]);
  line = 1;
  for (let i = 0; i < tc; i++) {
    n = Number(input[line]);
    line++;
    arr = input[line].split(" ").map(Number);
    line++;
    fun(n, arr);
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
