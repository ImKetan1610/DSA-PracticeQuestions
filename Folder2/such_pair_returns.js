/*

Problem Statement:
For each test case, you are given N integers and K, 
your task is to write a program that prints "1" (without quotes) 
if there are 2 integers present in the array whose sum is K. 
Else print "-1" (without quotes).

Input:
Input Format :
First line contains T, no of test cases.
First line of each test case contains 2 space separated integers: N & K
Second line of each test case contains **N** space separated integers

Constraints :
1 <= T <= 10
1 <= N <=1000000
1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6

Output:
Output 1/-1 depending on the condition for each test case on new line

Sample Input:
1
5 2
3 4 0 2 7

Sample Output:
1

*/

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = +input[0];
  var line = 1;
  for (let i = 0; i < tc; i++) {
    const [N, target] = input[line++].trim().split(" ").map(Number);
    const arr = input[line++].trim().split(" ").map(Number);
    findtarget(N, target, arr);
  }
}

const findtarget = (N, target, arr) => {
  arr.sort((a, b) => a - b);
  let l = 0,
    r = N - 1;
  while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum === target) {
      console.log(1);
      return;
    } else if (sum > target) r--;
    else l++;
  }
  console.log(-1);
};

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
