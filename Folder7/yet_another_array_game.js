/*

Description:
You are playing a game with your coding buddy.
You both have an array of the same size, n. The game is really simple, in one move you can choose all positive elements of your array and reduce them by 1.
You can perform this operation as many times as you like. Determine whether it is possible to make your array equal to your coding buddy's array.
Output YES if it is possible, else NO.
Refer to the I/O for better understanding.

Input
Input Format
The first line of input contains an integer t, the total number of testcases.
Next 3*t lines, conatain the description of the testcases.
Each testcase has three lines of input.
The first line of input contains an integer n, denoting the size of the array.
The second line contains n integers, denoting your array.
The third line contains n integers, denoting your buddy's array.

Constraints
1 <=t<= 10^3
1 <=n<= 10^4
0 <=`array[i]<= 10^5

Output
Output Format
Output YES if you can make your array equal to your friends array, NO otherwise

Sample Input 1 
1
5
8 5 3 0 1
5 2 0 0 0

Sample Output 1
YES

Hint
Your array                                                        Friends array
8 5 3 0 1                                                         -> 5 2 0 0 0
-> 7 4 2 0 0
-> 6 3 1 0 0
-> 5 2 0 0 0

So in 4 moves you can make your array same as your friends.
Hence the output is YES

*/

function solve(n, arr, frr) {
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0 && arr[i] > frr[i]) {
      let d = arr[i] - frr[i];
      for (let j = 0; j < n; j++) {
        arr[j] = arr[j] - d;
        if (arr[j] < 0) {
          arr[j] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] !== frr[i]) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    let dept = input[line++].trim().split(" ").map(Number);
    solve(n, arr, dept);
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
