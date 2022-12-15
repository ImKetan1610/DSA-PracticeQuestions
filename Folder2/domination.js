/*

Problem Statement:
At masai we say that a number is dominating in an array if it appears in the array most number of times, 
i.e. the count of this number in this array if greater than all others in the array.
You are given an array of size n.
If there exists a dominating number in the array output YES else NO


Input
Input Format
The first line of input will contain a single integer T, denoting the number of test cases.
Each test case consists of a two lines of input.
The first line of each test case contains an integer n — the size of the array.
The second line of each testcase contains n space separated integers, denoting the elements of the array.

Constraints:
1 <= T <= 100
1 <= N <= 10^5
1 <= elements of array <= 10^7


Output:
Output Format:
If there exists a dominating number in the array output YES else NO


Sample Input:
2
5
1 2 2 2 2
5
1 2 2 3 3

Sample Output:
YES
NO

Hint:
Test case 1: 2 is the dominant element.
Test case 2: There does not exist any dominant element.

*/

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    Domination(n, arr);
  }
}

function Domination(n, arr) {
  let obj = {};
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  let max = -Infinity;
  for (let x in obj) {
    if (max < obj[x]) {
      max = obj[x];
    }
  }
  for (let y in obj) {
    if (obj[y] == max) {
      count++;
    }
  }
  if (count < 2) {
    console.log("YES");
  } else {
    console.log("NO");
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
