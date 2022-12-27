/*

Description:
You are given n different numbers and an integer k. 
Write a program that finds number of times k is present in log(n) time complexity.
NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION
WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION
USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION

Input:
Input Format :
First line contains N and K
Second line contains N space separated sorted integers

Constraints :
N<100

Output:
Print number of times that number is present in the given list

Sample Input:
6 3
2 3 3 3 6 9

Sample Output:
3

*/

function fun(N, K, arr) {
  var ans = 0;
  for (var i = 0; i < N; i++) {
    if (K == arr[i]) ans++;
  }
  console.log(ans);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var size = input[0].trim().split(" ").map(Number);
  var N = size[0];
  var K = size[1];
  var arr = input[1].trim().split(" ").map(Number);
  fun(N, K, arr);
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
