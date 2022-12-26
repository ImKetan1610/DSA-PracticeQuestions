/*

Description:
You are given an array of N unsorted numbers. 
Your task is to write BUBBLE SORT using RECURSION such that numbers present in the array get sorted.
USING ANY OTHER ALGORITHM OR USING SORT FUNCTION WOULD LEAD TO DISQUALIFICATION.

Input:
Input Format:
First line of input contains N
Second line of input contains N numbers

Constraints:
N < 500

Output:
Output the numbers given after sorting it in increasing order

Sample Input:
5
3 5 0 9 8

Sample Output:
0 3 5 8 9

*/

function solveBubbleSort(N, arr) {
  let left = 0;
  let right = N - 1;

  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  solveBubbleSort(n, arr);
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
    process.et(0);
  });
}
