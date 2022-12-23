/*

Problem Statement:
You have the marks of students in the form of an array, 
    where arr[i] represents the marks of the ith student.
Since you are a curious kid, you want to find all the marks that are not smaller than those on its right side in the array.

Input:
Input Format :
The first line of input will contain a single integer n denoting the number of students.
The next line will contain n space separated integers representing the marks of students.

Constraints :
1 <= n <= 1000000
0 <= arr[i] <= 10000

Output:
Output all the integers separated in the array from left to right that are not smaller than those on its right side.

Sample Input:
6
16 17 4 3 5 2

Sample Output:
17 5 2

Hint:
Output Explanation :
17, 5 and 2 are three integers present in the list which has no integers greater than it to its right 
    (all the integers present in right of it)

*/

function fun(n, arr) {
  let stack = [];
  let ans = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (!stack.length) {
      ans.push(arr[i]);
    }
    stack.push(arr[i]);
  }
  console.log(ans.reverse().join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  fun(n, arr);
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
    runProgramm(read);
    process.et(0);
  });
}
