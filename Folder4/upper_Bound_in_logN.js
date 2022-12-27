/*

Description:
You are given n different numbers and an integer k. 
Write a program that finds upper bound of k in log(n) time complexity. 
Upper bound of a number k in a sorted list is the index of the first number which is greater than k 
(here the answer is given considering index to be starting from 0)
-> Test cases are such that there is always one number greater than k
NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION
WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION
USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION

Input:
Input Format:
First line contains N and K
Second line contains N space separated sorted integers

Constraints:
N<100

Output:
Output upper bound:
Sample Input:
10 3
0 2 4 4 5 5 7 7 9 10

Sample Output:
2

Sample Input:
10 4
0 2 4 4 5 5 7 7 9 10

Sample Output:
4

*/

function UpperBoundLogN(n, k, arr) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > k) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] <= k) {
      low = mid + 1;
    }
  }
  console.log(ans);
}

function runProgram(input) {
  //Input Taking Here
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  UpperBoundLogN(n, k, arr);
}

if (process.env.USER === "") {
  runProgram("");
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
