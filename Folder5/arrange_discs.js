/*

Description:
One day Virat challenges Rohit to build the tallest tower from a set of disks of different height and radius. 
The tower can be built by stacking disks on top of each other. 
In order to put disk A on top of disk B, the radius and height of A must be strictly smaller than those of B.

Help Rohit to win the challenge.


Input
Input Format :
First line of input contains number of test cases T.
First line of each test case contains value of N, the number of disks. 
The next N lines contains two positive integer number Ri and Hi corresponding to the radius 
    and height of ith Disk respectively

Constraints :
1<=T<=10
1<=N<=200
1<=Ri, Hi<=10^9

Output:
For each test case print the maximum height of the tower possible.

Sample Input:
2
3
4 3
1 4
3 2
5
5 6
4 3
1 2
7 5
3 4

Sample Output:
5
12

*/

function ArrangeDisc(N, arr, dp) {
  for (let i = 0; i < N; i++) {
    let val = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j][1] < arr[i][1] && arr[j][0] < arr[i][0]) {
        if (val < dp[j]) {
          val = dp[j];
        }
      }
    }
    dp[i] = arr[i][1] + val;
  }
  let max = -Infinity;
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i]);
  }
  console.log(max);
}

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let arr = [];
    let N = +input[line++];
    for (let j = 0; j < N; j++) {
      arr.push(input[line++].split(" ").map(Number));
    }
    arr = arr.sort((a, b) => a[0] - b[0]);
    let dp = new Array(N).fill(-Infinity);
    ArrangeDisc(N, arr, dp);
  }
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
    process.exit(0);
  });
}
