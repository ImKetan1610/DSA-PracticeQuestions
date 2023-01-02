/*

Description
You are given an array, and an integer of size K
You have to reverse the array fromK to N-1, whereNis the size of the array
You must not use any extra space or create a new array for the same
Ensure you are not using any extra array, and not directly printing it

Input
The first line of the input contains the value of N and K
The next line contains N space separated values denoting the elements of the array

Constraints
1 <= N <= 100
1 <= arr[i] <= 100

Output
Reverse the array fromK to N-1, and print the updated array on a single line

Sample Input 1 
6 2
1 2 3 4 5 6

Sample Output 1
1 2 6 5 4 3

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  solve(n, k, arr);
}

function solve(n, k, arr) {
  let ans = "";
  for (let i = 0; i < k; i++) {
    ans = ans + arr[i] + " ";
  }
  for (let j = n - 1; j >= k; j--) {
    ans = ans + arr[j] + " ";
  }
  console.log(ans);
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
