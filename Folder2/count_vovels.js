/*

Problem Statement:
Given a 2D array with N rows and M columns containing lowercase alphabets. 
Given a pattern containing the array elements in V shape, 
starting from the top right corner and ending up at the bottom right corner as given below:

prob2.png

Calculate the number of vowels that are contained in the V shape.
Note - Assume 1-based indexing.

Input:
First line: Single integer denoting the value of T - the number of test cases.
For each test case:
First line: Two single space-separated integers denoting the value of N and M.
N lines follow:
Each of the lines consists of M single space-separated characters, denoting a row of a matrix.

Constraints:
1 <= T <= 100
1 <= N,M <= 100

Output:
For each test case, print in a new line, 
a single integer denoting the number of vowels that are contained in the V shape. 
If it is not possible to traverse the V shape, print -1.

Sample Input:
2
3 2
a a
b b
c c
2 2
a a
b b

Sample Output:
1
-1

Hint:
You are to print the sum of elements of matrix which are at following positions:
(1,M),(2,M-1),(3,M-2), ........, (M-1,2), (M,1), (M+1,2),(M+2,3), ......, (N,M).
Given test cases,
Test 1:
N = 3, M = 2, and given 2D array:
a a
b b
c c

Elements at required positions:
(1,2) - a, (2,1) - b, (3,2) - c.
Hence the number of vowels is 1.

Test 2:
Elements at required positions:
(1,2) - a, (2,1) - b.
There are no elements to be traversed further, hence you can't reach the bottom right corner of the array. 
Hence the answer is -1.

*/

function matrix(n, m, mat) {
  if (n - m == m - 1) {
    let bag = "";
    let bag1 = "";
    let count = 0;
    let count1 = 0;
    let j = m - 1;
    let i = 0;

    while (i <= Math.floor(n / 2) && j >= 0) {
      bag += mat[i][j] + " ";
      i++;
      j--;
    } //console.log(bag)

    j = 1;
    i = Math.floor(n / 2) + 1;
    while (i < n && j < m) {
      bag += mat[i][j] + " ";
      i++;
      j++;
    } //console.log(bag)

    for (let i = 0; i < bag.length; i++) {
      if (
        bag[i] == "a" ||
        bag[i] == "e" ||
        bag[i] == "i" ||
        bag[i] == "o" ||
        bag[i] == "u"
      ) {
        count++;
      }
    }
    console.log(count);
  } else {
    console.log("-1");
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let k = input[line].trim().split(" ").map(Number);
    let n = +k[0];
    let m = +k[1];

    line++;
    let mat = [];
    for (let j = 0; j < n; j++) {
      mat.push(input[line].trim().split(" "));
      line++;
    }

    //matrix(n,mat)
    matrix(n, m, mat);
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
