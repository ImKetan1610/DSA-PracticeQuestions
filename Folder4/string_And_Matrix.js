/*

Description:
You are given a matrix of characters. 
    The matrix has N rows and M columns. 
    Given a string s, you have to tell if it is possible to generate that string from the given matrix.
Rules for generating string from the matrix are:
1. You have to pick the first character of string from row 1, the second character from row 2 and so on. 
    The (N+1)th character of the string is to be picked from row 1, 
    that is, you can traverse the rows in a cyclic manner (row 1 comes after row N).
2. If an occurrence of a character is picked from a row, 
    you cannot pick the same occurrence again from that row.
You have to print Yes if a given string can be generated from the matrix using the given rules, else print No.

Input:
Input Format:
First line consists of T, denoting the number of test cases.
Each test case consists of:
First line consists of two integers N and M, denoting the matrix dimensions.
Following N lines consist of M characters each.
The last line consists of a string s.

Constraints:
T <= 5
N,M <= 500
Length of string < N*M
The matrix consists of lowercase English characters.
String s consists of lowercase English characters.

Output:
For each test case, print "Yes" if the string can be generated else print "No". 
Answer for each test case should come in a new line.

Sample Input:
1
3 3
aba
xyz
bdr
axbaydb

Sample Output:
Yes

Hint:
Sample 1 Explanation
We pick "a" from row 1. Now, we can only pick one more "a" from row 1 as one "a" is already used.
Similarly, "x" from row 2, "b" from row 3.
Now, we again go back to row 1.
We pick "a" from row 1, "y" from row 2 and so on.

*/

function funk(n, m, arr, str) {
  let strArr = [];

  for (let x = 0; x < n; x++) {
    let obj = {};

    for (let y = 0; y < m; y++) {
      if (obj[arr[x][y]] == undefined) {
        obj[arr[x][y]] = 1;
      } else {
        obj[arr[x][y]]++;
      }
    }

    strArr.push(obj);
  }

  let isDone = true;
  let row = 0;
  for (let x = 0; x < str.length; x++) {
    if (strArr[row][str[x]] > 0) {
      strArr[row][str[x]]--;
    } else {
      isDone = false;
      console.log("No");
      break;
    }

    row++;
    if (row === n) {
      row = 0;
    }
  }

  if (isDone) {
    console.log("Yes");
  }
}

function runProgram(input) {
  //Input Taking Here

  let res = input.split("\n");
  let t = res[0];
  let line = 1;
  for (let rep = 0; rep < t; rep++) {
    let whole = res[line].split(" ").map(Number);
    let n = whole[0];
    let m = whole[1];
    let arr = [];

    for (let x = 0; x < n; x++) {
      arr.push(res[line + 1 + x]);
    }
    let str = res[line + n + 1];
    // console.log(n,m,arr,str)
    funk(n, m, arr, str);
    line += n + 2;
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
    runProgramm(read);
    process.et(0);
  });
}
