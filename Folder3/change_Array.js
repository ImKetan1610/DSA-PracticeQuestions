/*

Problem Statement:
You are given an array A of size N.
You need to change all numbers in array which are divisible by smallest number in array, to -1 and print array.

Input:
First line contains T, no of test cases.
First line of each test case contains N, size of array
Second line of each test case contains N spaced integers of array A.

Constraints:
1 <= T <= 10
1 <= N <= 100
1 <= A[i] <= 1000

Output:
For each test case, print array,on new line.


Sample Input:
2
3
1 3 2
5
3 3 2 9 7

Sample Output:
-1 -1 -1 
3 3 -1 9 7

Hint:
For test case 1, 1 is smallest number.
All numbers in array, are divisible by 1, so whole array elements changes to -1.

*/

function runProgram(input) {
  //Write code here
  input = input.split("\n");
  const tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    const n = +input[line++];
    const arr = input[line++].split(" ").map(Number);
    changeArr(n, arr);
  }
}

function changeArr(n, arr) {
  // console.log(n,arr)
  let smallest = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  // console.log(smallest)
  const res = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] % smallest == 0) {
      res.push(-1);
    } else {
      res.push(arr[i]);
    }
  }
  console.log(res.join(" "));
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
