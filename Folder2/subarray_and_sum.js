/*

Problem Statement:
Given an array of integers of length n and a positive integer K, 
the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.

Input:
Input Format:
First line contains n and k separated by space
Second line contains strings of length n.

Constraints:
1 <= n <=10^6
1 <= k <= 100

Output:
Print count of sub arrays.

Sample Input:
4 3
2 3 4 6

Sample Output:
1

Hint:
Sample 1 Explanation:
There is only one longest possible subarray of size 3 i.e. {3, 4, 6} having a sum 13, 
which is not divisible by K = 3.

*/

function runProgram(input) {
  // Write Code Here

  input = input.split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(SubarrayAndSum(n, k, arr));
}

function SubarrayAndSum(n, k, arr) {
  let i,
    s = 0;
  for (i = 0; i < n; ++i) {
    s += arr[i];
  }

  if (s % k != 0) {
    return 1;
  } else {
    let ini = 0;

    while (ini < n && arr[ini] % k == 0) {
      ++ini;
    }

    let fin = n - 1;

    while (fin >= 0 && arr[fin] % k == 0) {
      --fin;
    }

    let len,
      sum = 0,
      count = 0;

    if (ini == n) {
      return -1;
    } else {
      len = Math.max(n - 1 - ini, fin);
    }

    for (i = 0; i < len; i++) {
      sum += arr[i];
    }

    if (sum % k != 0) {
      count++;
    }

    for (i = len; i < n; i++) {
      sum = sum + arr[i];
      sum = sum - arr[i - len];

      if (sum % k != 0) {
        count++;
      }
    }
    return count;
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
