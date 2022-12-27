/*

Description:
You are given n different numbers and an integer k. 
Write a program that finds lower bound of k in log(n) time complexity. 
Lower bound of a number k in a sorted list is the index of the first number which is same as k, 
    in case the number is not present, print -1 (here the answer is given considering index to be starting from 0)
NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.
WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.
USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.

Input:
Input Format:
First line contains N and K
Second line contains N space separated sorted integers

Constraints:
N<100

Output:
Output lower bound
Sample Input:
5 2
1 1 2 2 5

Sample Output:
2

Sample Input:
5 3
1 1 2 2 5

Sample Output:
-1

*/

function my_fun(n, k, arr) {
  let ans = -1;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] == k) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(ans);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let x = input[0].trim().split(" ").map(Number);
  let n = x[0];
  let k = x[1];
  let arr = input[1].trim().split(" ").map(Number);

  my_fun(n, k, arr);
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
