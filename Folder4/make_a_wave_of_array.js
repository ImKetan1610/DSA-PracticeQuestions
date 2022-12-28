/*

Description:
Given an array of length N , sort the array into a wave-like pattern.
An array is sorted in waveform if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >=  and so on ...
Note:This problem was asked in Yantriks

Input:
Input Format:
First Line consists of the length of array N
Second Line consists of N integers separated by spaces.

Constraints:
1 <= N <= 10^6

Output:
Print the output array.

Sample Input:
10
9 8 4 10 3 6 5 7 1 2

Sample Output:
2 1 4 3 6 5 8 7 10 9

*/

function make_a_wave(n, arr) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i = i + 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  make_a_wave(n, arr);
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
