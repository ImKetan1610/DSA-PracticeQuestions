/*

Description
Visualize a honeycomb maze in the form of a 2d array (n rows, m columns). Refer to the figure to see what a honeycomb maze looks like (but keep in mind that yours is in the form of 2d array)
You are given a starting point (row, column) where you are present in the maze. your task is to find out whether or not you can traverse the maze and return to the original position. You cannot visit any cell in the maze that has already been visited. Also, you have to make a minimum of 'k' number of moves before returning to the starting point. The '.' represent the empty blocks whereas the '*' represent the blocks that can't be visited .From a block (x,y) you can move only to blocks (x-1,y) , (x+1,y) , (x,y+1) , (x,y-1) . You have to print if it is possible return to your original position.

Input
The first line of the input contains the dimensions of the maze ( N x M). Second line of the input contains 'k' as described in problem .The third line denotes the coordinates of the starting point. The next N lines contain the description of the N rows

Constraints
1 <= N, M <= 20

Output
Output "YES" (without quotes) if it's possible .
Else output "NO" (without quotes.

Sample Input 1 
5 5
14
1 2
. . . * *
* . . . *
* . . . .
. * . . .
. * . . *

Sample Output 1
YES

Hint
Explanation of the test case :1,2 -> 2,2 -> 3,2 -> 3,3 -> 4,3 -> 5,3 -> 5,4 -> 4,4 -> 4,5 -> 3,5 -> 3,4 -> 2,4 -> 2,3 -> 1,3 -> 1,2
14 moves were made ( No. of dashes ( -> )) . So, its possible . Also , no blocks were repeated .

*/

function runProgram(input) {
  let [size, k, start, ...rest] = input.trim().split("\n");
  let [r, c] = size.split(" ").map(Number);
  k = Number(k);
  let [m, l] = start.split(" ").map(Number);

  let A = [];
  for (let i = 0; i < rest.length; i++) {
    A.push(rest[i].split(" "));
  }

  let ans = "NO";

  getOrigin(m - 1, l - 1, 0);
  console.log(ans);

  function getOrigin(i, j, move) {
    // console.log(move===k&&move);
    if (move === k && i === m - 1 && j === l - 1) {
      ans = "YES";
      return;
    }

    if (
      i < 0 ||
      i >= A.length ||
      j < 0 ||
      j >= A[0].length ||
      A[i][j] === "*"
    ) {
      return;
    }

    A[i][j] = "*";
    getOrigin(i + 1, j, move + 1);
    getOrigin(i - 1, j, move + 1);
    getOrigin(i, j + 1, move + 1);
    getOrigin(i, j - 1, move + 1);
    A[i][j] = ".";
  }
}

if (process.env.USER === "") {
  runProgram("");
} else {
  process.stdin.resume("");
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", (input) => (read += input));
  process.stdin.on("end", () => {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.stdin.on("SIGINT", () => {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
}
