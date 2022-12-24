/*

Problem Statement:
You have to write code that draws a Snake for you according to the following rules:
A snake is a pattern on a n by m table. Denote c-th cell of r-th row as (r, c). 
    The tail of the snake is located at (1, 1), then it's body extends to (1, m), 
    then goes down 2 rows to (3, m), then goes left to (3, 1) and so on.
The empty cells should be represented as dot characters ('.') 
    and the snake cells should be filled with number signs ('#').
Consider sample tests in order to understand the snake pattern.

Input:
Input Format:
The only line contains two integers: n and m.
n is an odd number.

Constraints:
3 ≤ n,m ≤ 50

Output:
Output Format:
Output n lines. Each line should contain a string consisting of m characters. Do not output spaces.


Sample Input:
3 3

Sample Output:
###
..#
###

Sample Input:
5 3

Sample Output:
###
..#
###
#..
###

Sample Input:
9 9

Sample Output:
#########
........#
#########
#........
#########
........#
#########
#........
#########

*/

function runProgram(input) {
  let sizes = input.trim().split(" ").map(Number);
  let N = sizes[0];
  let m = sizes[1];
  // console.log(n,m)
  let count = 0;
  let array = [];
  while (count <= N) {
    let str = "";
    for (let i = 0; i < m; i++) {
      str += "#";
    }
    count++;
    array.push(str);
    if (count == N) {
      break;
    }
    str = "";
    for (let i = 0; i < m; i++) {
      if (i == m - 1) {
        str += "#";
      } else {
        str += ".";
      }
    }
    count++;
    array.push(str);
    str = "";
    if (count == N) {
      break;
    }

    for (let i = 0; i < m; i++) {
      str += "#";
    }
    count++;
    array.push(str);
    str = "";
    if (count == N) {
      break;
    }

    for (let i = 0; i < m; i++) {
      if (i == 0) {
        str += "#";
      } else {
        str += ".";
      }
    }
    count++;
    array.push(str);
    str = "";

    if (count == N) {
      break;
    }
  }
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
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
