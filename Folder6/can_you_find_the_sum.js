/*

Description
Teena is very good at competitive programming, she solved enough problems on arrays and her friend wants to test her knowledge in arrays, so gave her following task :
The problem is given an array A having N integers, for each element i (1 <= i <= N), find x+y  where x is the largest number less than i such that A[x]>A[i] and y is the smallest number greater than i such that A[y]>A[i].
If there is no x < i such that A[x]>A[i], then take x=−1. Similarly, if there is no y>i such that A[y]>A[i], then take y=−1.

Input
Input Format
First line consists of a single integer denoting N.
Second line consists of N space separated integers denoting the array A.

Constraints
1 <= N <= 10^6
1 <= A[i] <= 10^9

Output
Print N space separated integers, denoting x+y for each i

Sample Input 1 
5
5 4 1 3 2

Sample Output 1
-2 0 6 1 3 

Hint
Sample 1 Explanation
Values of x for each i: -1,1,2,2,4
Values of y for each i: -1,-1,4,-1,-1
So, x+y for each i: -2,0,6,1,3

*/

function Run(n, arr) {
  let s1 = [];
  let x = [];
  for (let i = 0; i < n; i++) {
    while (s1.length !== 0 && arr[s1[s1.length - 1]] <= arr[i]) {
      s1.pop();
    }
    if (s1.length === 0) {
      x.push(-1);
    } else {
      x.push(s1[s1.length - 1] + 1);
    }
    s1.push(i);
  }
  let s2 = [];
  let y = [];
  for (let j = n - 1; j >= 0; j--) {
    while (s2.length !== 0 && arr[s2[s2.length - 1]] <= arr[j]) {
      s2.pop();
    }
    if (s2.length === 0) {
      y.push(-1);
    } else {
      y.push(s2[s2.length - 1] + 1);
    }
    s2.push(j);
  }
  y = y.reverse();

  let ans = [];
  for (let k = 0; k < n; k++) {
    ans.push(x[k] + y[k]);
  }
  console.log(ans.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  Run(n, arr);
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
