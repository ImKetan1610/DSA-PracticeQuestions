/*

Problem Statement:
Ankush has an 8×8 chessboard whose rows are numbered from 1 to 8 from top to bottom and whose columns are numbered from 1 to 8 from left to right.
Ankush has placed exactly one bishop on the chessboard.
The bishop is not placed on the edges of the board. 
(In other words, the row and column of the bishop are between 2 and 7, inclusive.)
The bishop attacks in all directions diagonally, and there is no limit to the distance which the bishop can attack.
Note: that the cell on which the bishop is placed is also considered attacked.
Ankush has marked all squares the bishop attacks, but forgot where the bishop was!
Help Ankush find the position of the bishop.
Hint : The position of the Bishop can be identified by the point where 2 diagonals meet

Input:
Input Format:
The first line contains the number of test cases t.
Each test case consists of 8 lines, each containing 8 characters.
Each of these characters is either '#' or '.', 
denoting a square under attack and a square not under attack, respectively.

Constraints:
1 <=t<= 30

Output:
Output Format:
For each test case, output two integers r and c (2≤r,c≤7) — the row and column of the bishop.
The input is generated in such a way that there is always exactly one possible location of the bishop that is not on the edge of the board.

Sample Input:
2
.....#..
#...#...
.#.#....
..#.....
.#.#....
#...#...
.....#..
......#.
#.#.....
.#......
#.#.....
...#....
....#...
.....#..
......#.
.......#

Sample Output:
4 3
2 2

Hint:
The first test case is pictured in the statement.
Since the bishop lies in the intersection row 4 and column 3, the correct output is 4 3.

*/

function findBishop(n, mat) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //I can't get i-1 value when I am in i=0, it will throw undefined error

      //Below condition is working
      if (
        mat[i][j] == "#" &&
        mat[i][j + 2] == "#" &&
        mat[i + 1][j + 1] == "#"
      ) {
        return `${i + 2} ${j + 2}`;
      }
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;
  let tc = +input[line++];
  for (let i = 0; i < tc; i++) {
    let mat = [];
    for (let j = 0; j < 8; j++) {
      mat.push(input[line++]);
    }
    let n = mat.length;
    console.log(findBishop(n, mat));
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
