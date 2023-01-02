/*

Description
Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.
In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.
Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity

Input
Input Format
First line Consists of integer n.
Second line consists of n integers separated by spaces.

Constraints
1 <= n <= 10^6

Output
Print minimum element.

Sample Input 1 
10
4 6 7 9 10 -1 0 1 2 3

Sample Output 1
-1

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  minInSortedAndRotatedArray(N, arr);
}

function minInSortedAndRotatedArray(N, arr) {
  let min = Infinity;
  let f = false;
  for (let i = 0; i < N; i++) {
    // min=Math.min(min,arr[i])
    if (arr[i] > arr[i + 1]) {
      min = arr[i + 1];
      f = true;
    }
  }
  if (f == false) {
    console.log(arr[0]);
  } else {
    console.log(min);
  }
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
