/*

Problem Statement:
Given a square matrix of size N, turn it by 90 degrees in an anti-clockwise direction, as shown in sample input.

Input:
Input Format:
First line will contain the number of rows N (same as the number of columns)
After that next N lines will N rows of the matrix.

Constraints:
1 <= N <=1000
1 <= Elements Of the Matrix <= 10000

Output:
You have to display the rotated matrix.

Sample Input:
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8

Sample Output:
4 8 4 8
3 7 3 7
2 6 2 6
1 5 1 5

*/

function rotateBy90(R, matrix) {
  // write code here
  // inplace rotation with no extra spaces;
  // 90 degree clockwise rotation.
  // we have to do in place swapping.
  // there are two ways through which you can solve this question.

  // one is basically reverse each element of matrix mat[i].reverse()
  // and then basically find the transpose of the matrix (inplace transposing)...
  // the main moto of doing all this is basically to reduce space complexity other wise it can be
  // easily done with extra space
  let answer = inplacer(R, matrix);
  for (let i = 0; i < answer.length; i++) {
    console.log(matrix[i].join(" "));
  }
}
const inplacer = (N, matrix) => {
  // a matrix of side N has N/2 square in it. this is the main concept to realize;
  for (let x = 0; x < Math.floor(N / 2); x++) {
    for (let y = x; y < N - x - 1; y++) {
      // why N-x-1 and why y=x? because each time the cycle will decrease by 2 x will increase by one
      //so y and N-x-1 will decrease by one so net decrement will be of 2 and apart from it
      // the loop will run N-2 times depending on the length of cycle for 1st time N-2
      // FOR SECOND CYCLE N-4 AND SO ON THIS WHAT WRITTEN HERE ALSO...
      let temp = matrix[x][y];
      matrix[x][y] = matrix[y][N - x - 1];
      matrix[y][N - x - 1] = matrix[N - x - 1][N - y - 1];
      matrix[N - x - 1][N - y - 1] = matrix[N - y - 1][x];
      matrix[N - y - 1][x] = temp;
    }
  }
  return matrix;
};
