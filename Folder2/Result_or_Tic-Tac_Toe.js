/*

Problem Statement:
You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.
Your task is to write a program that finds out the winner in case the match ended in a win. 
If the winner is 'x', print x.
If the winner is 'o', print o.
In case the match ended in a tie, printTie.


Input:
InputFormat
The input contains 3 lines where each line has 3 space separated characters which represent the final status of tic tac toe

Constraints:
The input contains either of the 2 alphabets: 'x' and 'o'


Output:
Print Tie/x/o depending on the end result of the game.


Sample Input:
x o x
o x x
o o o

Sample Output:
o`

Hint:
o wins as per tic tac toe.
*/

function ticTacToe(matrix) {
  for (let i = 0; i < 3; i++) {
    let count_o = 0;
    let count_x = 0;
    for (let j = 0; j < 3; j++) {
      if (matrix[i][j] == "o") {
        count_o++;
      } else if (matrix[i][j] == "x") {
        count_x++;
      }
    }
    if (count_o == 3) {
      console.log("o");
      break;
    } else if (count_x == 3) {
      console.log("x");
      break;
    }
  }
  for (let i = 0; i < 3; i++) {
    let count_o = 0;
    let count_x = 0;
    for (let j = 0; j < 3; j++) {
      if (matrix[j][i] == "o") {
        count_o++;
      } else if (matrix[j][i] == "x") {
        count_x++;
      }
    }
    if (count_o == 3) {
      console.log("o");
      break;
    } else if (count_x == 3) {
      console.log("x");
      break;
    }
  }
  let count_o1 = 0;
  let count_x1 = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i == j) {
        if (matrix[i][j] == "o") {
          count_o1++;
        } else if (matrix[i][j] == "x") {
          count_x1++;
        }
      }
    }
  }
  if (count_o1 == 3) {
    console.log("o");
  } else if (count_x1 == 3) {
    console.log("x");
  }
  let count_o = 0;
  let count_x = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 2; j >= 0; j--) {
      if ((i == 0 && j == 2) || (i == 1 && j == 1) || (i == 2 && j == 0)) {
        if (matrix[i][j] == "o") {
          count_o++;
        } else if (matrix[i][j] == "x") {
          count_x++;
        }
      }
    }
  }
  if (count_o == 3) {
    console.log("o");
  } else if (count_x == 3) {
    console.log("x");
  }
}
