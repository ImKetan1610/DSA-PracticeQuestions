/*

Description:
You're given a N*N chessboard which initially has some queens present at some of the places on the chessboard. 
Find the maximum number of queens that you can place on the chessboard such that no queen can attack any other queen. 
An empty cell is shown by '.' and a queen is shown by 'Q'.

Input:
Input Format:
The first line contains the integer N
The next N lines contain a string of N characters representing the respective row of the chessboard

Constraints:
1<=N<=9

Output:
Print the maximum number of queens that you can place on the chessboard.

Sample Input:
3
Q..
...
...

Sample Output:
1

Hint:
You can only place a queen in the last column of the second row or in the second column of the last row

*/

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let board = [];
  let line = 1;
  for (let i = 0; i < n; i++) {
    board.push(input[line].split(""));
    line++;
  }

  logic(n, board);
}

let max = -1;

function logic(n, board) {
  let count = 0;
  max = -1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == "Q") {
        count++;
      }
    }
  }

  position(0, board);

  if (max == 0) {
    console.log("0");
  } else {
    console.log(max - count);
  }
}

function position(ind, board) {
  // console.log(board.length);
  if (ind == board.length) {
    let count1 = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] == "Q") {
          count1++;
        }
      }
    }
    if (count1 > max) {
      max = count1;
    }
    return;
  }
  let flag = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[ind][i] == "Q") {
      position(ind + 1, board);
    } else {
      if (safe(ind, i, board)) {
        flag = 1;
        board[ind][i] = "Q";
        position(ind + 1, board);
        board[ind][i] = ".";
      }
    }
  }
  if (flag == 0) {
    position(ind + 1, board);
  }
}

function safe(rr, cc, board) {
  for (let i = rr - 1; i >= 0; i--) {
    if (board[i][cc] == "Q") {
      return false;
    }
  }
  for (let i = rr - 1, j = cc - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] == "Q") {
      return false;
    }
  }
  for (let i = rr - 1, j = cc + 1; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j] == "Q") {
      return false;
    }
  }
  for (let i = cc - 1; i >= 0; i--) {
    if (board[rr][i] == "Q") {
      return false;
    }
  }
  for (let i = cc + 1; i < board.length; i++) {
    if (board[rr][i] == "Q") {
      return false;
    }
  }
  return true;
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
