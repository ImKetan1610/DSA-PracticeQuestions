/*

Problem Statement:
Given an array A having N non-negative integers. 
    Find the element that occurs more than N/2 times. 
    If no such element is there then print -1.

Input:
First line: Single integer T denoting the number of test cases.
For each test case:
First line: Single integer denoting the value of N.
Next line contains N single space separated integers denoting the elements of array A.

Constraints:
1 <= T<= 10
1<= N <= 100000
0 <= A[ i ] <= 100000

Output:
For each test case, print in a new line a single integer denoting the majority element.

Sample Input:
2
6
1 1 1 1 2 3
5
1 1 2 2 3

Sample Output:
1
-1

Hint:
Given test cases :
Test case 1 :
N = 6,
A : 1 1 1 1 2 3

1 has occurred 4 times which is greater than N/2. Hence 1 is the majority element.

Test case 2 :
N = 5,
A : 1 1 2 2 3

None of the elements occurred more than N/2 times. Hence the answer for this case is -1.

*/

const major = (n, arr) => {
  let obj = {},
    max = 0,
    el = -1;
  for (let el of arr) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      el = key;
    }
  }
  max > n / 2 ? console.log(el) : console.log(-1);
};

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0],
    j = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[j++];
    let arr = input[j++].trim().split(" ").map(Number);
    major(n, arr);
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
