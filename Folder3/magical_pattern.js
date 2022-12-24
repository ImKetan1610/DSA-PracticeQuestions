/*

Problem Statement:
You are very fond of binary digits, your friend knew it and gave you a challenge. 
    You are given an array of 0s and 1s , form a magical pattern from it.
A pattern is called magical if it is of the form ( 0 1 0 1 0 1 ... ) 
    and all the extra ones/zeros are appended at the end.

Input:
Input Format:
First line contains the number of test cases
The first line of each test case is the length of the array N 
    and the second line contains N integers separated by space.

Constraints:
1<=T<=10
1<=N<=100000
0<=Ai<=1

Output:
Print a single line , the magical pattern.

Sample Input:
3
3
0 1 1
4
0 1 1 0
6
0 0 0 1 1 0

Sample Output:
0 1 1
0 1 0 1
0 1 0 1 0 0

*/

function runProgram(input) {
  input = input.split("\n");
  let line = 1;
  let tc = +input[0];
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].split(" ").map(Number);
    console.log(fun(n, arr));
  }
}

function fun(n, arr) {
  let count0 = 0;
  let count1 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      count0++;
    } else {
      count1++;
    }
  }
  let bag = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      if (count0 > 0) {
        bag = bag + 0 + " ";
        count0--;
      } else {
        bag = bag + 1 + " ";
        count1--;
      }
    } else {
      if (count1 > 0) {
        bag = bag + 1 + " ";
        count1--;
      } else {
        bag = bag + 0 + " ";
        count0--;
      }
    }
  }
  return bag;
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
