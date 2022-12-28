/*

Description:
Given an array of N integers. Find the minimum sum of K consecutive elements

Input:
Input Format:
The first line contains the number of testcases T
For each testcase, the first line contains the number N and K
The second line of each testcase consists of the elements of the array

Constraints:
1<=T<=10
1<=N<=10^5
1<=K<=N
-1000<=arr[i]<=1000

Output
For each testcase print the minimum sum of K consecutive elements in a new line.

Sample Input:
2
5 3
9 9 -5 9 5 
5 4
2 7 6 2 -5 

Sample Output:
9
10

Hint:
For the first testcase the different sums of K consecutive elements are : 13 13 9
For the second testcase the different sums of K consecutive elements are : 17 10

*/

function runProgram(input) {
  input = input.split("\n");
  let len = 0;
  let test = Number(input[len]);
  len++;
  for (let i = 0; i < test; i++) {
    let temp = input[len].trim().split(" ").map(Number);
    let target = temp[1];
    len++;
    let arr = input[len].trim().split(" ").map(Number);
    len++;
    min(target, arr);
  }
}

function min(k, arr) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  let max = Infinity;
  if (max > sum) {
    max = sum;
  }
  for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i - k] + arr[i];
    if (max > sum) {
      max = sum;
    }
  }
  console.log(max);
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
