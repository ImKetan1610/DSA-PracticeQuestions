/*

Description:
Given an integer array of size n, find all elements that appear more than⌊ n/3 ⌋times.

Input:
Input Format:
The first line contains the number of integers N
The second line contains the values of the array

Constraints:
1<=N<=10^5
1<=arr[i]<=10^5

Output
Print the majority elements in sorted order

Sample Input:
3
3 2 3

Sample Output:
3

Hint:
The element 3 occurs more than (3/3) 1 times

*/

function oneThird(N, arr) {
  let x = N / 3;
  let flag = 0;
  let obj = {};
  for (let i = 0; i < N; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
      if (obj[arr[i]] > x) {
        flag = arr[i];
      }
    }
  }
  console.log(flag === 0 ? "" : flag);
}

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  oneThird(n, arr);
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
