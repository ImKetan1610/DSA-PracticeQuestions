/*

Problem Statement:
You are given an array of N elements. You have to find all the subarrays, 
which have all the numbers in the subarray even.

Input
The first line contains N the size of the array. 
The next line contains N space separated integers, denoting the elements in the array.

Constraints:
1 <= N <= 100
1 <= A[i] <= 100

Output
Print a single integer denoting the count of all the subarrays which have all the elements in them even.

Sample Input:
3
1 2 3

Sample Output:
1

Hint:
In the sample test case, all the subarrays of the given array are
[1]
[1, 2]
[1, 2, 3]
[2]
[2, 3]
[3]

There is only one subarray with all the elements even -> [2]. Therefore, the answer is 1.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  subArray(arr, n);
}

function subArray(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let ans = [];
    for (let j = i; j < n; j++) {
      ans.push(arr[j]);
      if (oddEven(ans) === true) {
        count++;
      }
    }
  }
  console.log(count);
}

function oddEven(ans) {
  let count = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] % 2 === 0) {
      count++;
    }
  }
  if (count === ans.length) {
    return true;
  } else {
    return false;
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
