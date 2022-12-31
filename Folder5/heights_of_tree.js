/*

Description:
You are given n trees and their heights. 
Your task is to write a program that calculates the maximum number of trees whose height is in increasing order. 
They need not be in continuous manner.
For instance, if heights of 9 trees are 10, 22, 9, 33, 21, 50, 41, 60, 80. 
The maximum number of trees whose height is in increasing order is 6 : (10, 22, 33, 50, 60, 80).
(9,21, 41, 60, 80) is also in increasing manner but you need to 
find the maximum number of trees whose height is increasing. So, the answer is 6

Input:
Input Format:
First line contains n
Next line contains n space separated integers which representing heights of n trees.

Constraints:
n <= 1000

Output:
Output Format:
Output the max number of trees whose height is in increasing order

Sample Input:
9
10 22 9 33 21 50 41 60 80

Sample Output:
6

*/

function heightoftrees(N, arr) {
  let obj = [];
  for (let i = 0; i < arr.length; i++) {
    obj[i] = 1;
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        obj[i] = Math.max(obj[i], obj[j] + 1);
      }
    }
  }
  console.log(Math.max(...obj));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  heightoftrees(N, arr);
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
