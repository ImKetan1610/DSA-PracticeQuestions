/*

Problem Statement:
There are N trucks numbered from 1 to N. 
The trucks are coming on a road in a random manner.(by random, it means that any order of number: not sorted) 
There is a side lane which can be used to order the sequence of truck properly(1,2,3,..N)
Use these (Ref :https://imgur.com/a/yWLhQiK) images for better understanding of sample test case.
If it is possible to achieve using the side land, print "yes"
else print "no"

Input:
Input Format :
There are several test cases.
The first line of each test case contains a single number n, the number of trucks.
The second line contains the numbers 1 to n in an arbitrary order.
All the numbers are separated by single spaces. 
These numbers indicate the order in which the trucks arrive in the approach street.
Input ends with number 0

Constraints :
N < 1000

Output:
For each test case your program has to output a line containing a single word "yes" 
if the trucks can be re-ordered with the help of the side lane, and a single word "no" in case it is not possible.

Sample Input:
5
5 1 2 4 3 
0

Sample Output:
yes

*/

function func(n, a) {
  s = [];
  g = [];
  t = [];
  for (let i = 0; i < n; i++) {
    g[i] = a[i];
  }
  for (let i = 0; i < n; i++) {
    while (s[s.length - 1] <= a[i]) {
      t.push(s[s.length - 1]);
      s.pop();
    }
    s.push(a[i]);
  }
  for (let i = s.length - 1; i >= 0; i--) {
    t.push(s[i]);
  }

  d = g.sort((a, b) => a - b);

  if (d.join("") == t.join("")) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 0;
  N = +input[line];
  while (N !== 0) {
    line++;
    arr = input[line].split(" ").map(Number);
    line++;

    func(N, arr);
    N = +input[line];
  }
}

if (process.env.USERNAME === "") {
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
