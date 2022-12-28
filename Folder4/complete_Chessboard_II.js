/*

Description:
You're given a N*N chessboard which initially has some queens present at some of the places on the chessboard. 
Find if you can place N queens on the chessboard such that no queen can attack any other queen. 
An empty cell is shown by '.' and a queen is shown by 'Q'.

Input:
Input Format:
The first line contains the size of the array , N
The next N lines contains N characters ('Q' or '.') as the value of the cell

Constraints:
1<=N<=9

Output:
Print "YES" if you place N queens on the chessboard, else print "NO"

Sample Input:
2
..
..

Sample Output:
NO

Sample Input:
4
Q...
....
....
..Q.

Sample Output:
NO

Sample Input:
4
.Q..
....
Q...
....

Sample Output 3
YES

Hint:
In the sample test case, there is no way you can arrange 2 Queens, 
    so that no two queens can attack each other. 
Hence, the output is NO

In the second sample test case, the initial condition of the chessboard is as follows
Q...
....
....
..Q.

Now, since the 2 Queens are already placed, we need to place 2 more queens, 
    such that none of the queens is under attack. 
But, if you notice closely, there is no way that we can do that, hence the answer is NO

In the third sample test case, the initial condition of the board is as follows
.Q..
....
Q...
....

Now, since the 2 Queens are already placed, we need to place 2 more queens, 
    such that none of the queens is under attack. 
The following combination is possible, such that none of the queen is under attack
.Q..
...Q
Q...
..Q.

Since, we were able to placeN = 4queens, hence the output is YES

*/

let possible = 0;

let count = 0;

function nQueens(board, row = 0) {
  if (row === board.length) {
    if (count === board.length) {
      possible = 1;
    }
    return;
  }
  if (board[row][0] === ".") {
    for (let i = 0; i < board.length && !possible; i++) {
      // console.log('iter:', i)
      if (isValid(board, row, i)) {
        board[row][i] = "Q";
        count++;
        // console.log(board, 'added', row, i)
        nQueens(board, row + 1);
        board[row][i] = ".";
        count--;
        // console.log(board, 'removed', row, i)
      }
    }
  }
  nQueens(board, row + 1);
}

function isValid(board, row, col) {
  let n = board.length;

  //row & col
  for (let i = 0; i < n; i++) {
    if (board[row][i] === "Q" || board[i][col] === "Q") {
      return false;
    }
  }

  //diagonals
  let i = row - 1;
  let j = col - 1;
  while (i !== -1 && j !== -1) {
    if (board[i][j] === "Q") {
      return false;
    }
    i--;
    j--;
  }

  i = row + 1;
  j = col + 1;
  while (i !== n && j !== n) {
    if (board[i][j] === "Q") {
      return false;
    }
    i++;
    j++;
  }

  i = row - 1;
  j = col + 1;
  while (i !== -1 && j !== n) {
    if (board[i][j] === "Q") {
      return false;
    }
    i--;
    j++;
  }

  i = row + 1;
  j = col - 1;
  while (i !== n && j !== -1) {
    if (board[i][j] === "Q") {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = input[i + 1].split("");
    if (board[i].includes("Q")) {
      count++;
    }
  }
  nQueens(board);
  console.log(possible ? "YES" : "NO");
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
