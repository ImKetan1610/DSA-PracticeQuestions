/*

Description:
You are very good at playing chess since childhood and you knew the rules very much. 
    You have a  10 X 10 chessboard 
    and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.
    It is placed at (i,j) coordinate initially. 
    For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.
You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

0 X 0 X 0 0
X 0 0 0 X 0
0 0 K 0 0 0
X 0 0 0 X 0
0 X 0 X 0 0
0 0 0 0 0 0

Input:
Input Format:
Input will consist of three space separated integers i, j and N

Constraints:
N < 10

Output:
Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.


Sample Input:
3 3 1

Sample Output:
8

*/

function board(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let bag = [];
    for (let j = 0; j < n; j++) {
      bag.push(0);
    }
    arr.push(bag);
  }
  return arr;
}

function followTheKnight(board, row, col, n) {
  if (row < 0 || row >= board.length || col < 0 || col >= board.length) {
    return;
  }
  if (n === 0) {
    board[row][col] = 1;
    return;
  }
  followTheKnight(board, row - 2, col + 1, n - 1);
  followTheKnight(board, row - 2, col - 1, n - 1);
  followTheKnight(board, row + 2, col + 1, n - 1);
  followTheKnight(board, row + 2, col - 1, n - 1);
  followTheKnight(board, row - 1, col + 2, n - 1);
  followTheKnight(board, row - 1, col - 2, n - 1);
  followTheKnight(board, row + 1, col + 2, n - 1);
  followTheKnight(board, row + 1, col - 2, n - 1);
  return board;
}
function moves(arr) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        c++;
      }
    }
  }
  return c;
}

function runProgram(input) {
  let [i, j, n] = input.trim().split(" ").map(Number);
  let row = i - 1;
  let col = j - 1;
  let chessboard = board(10);
  let ans = followTheKnight(chessboard, row, col, n);

  console.log(moves(ans));
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
