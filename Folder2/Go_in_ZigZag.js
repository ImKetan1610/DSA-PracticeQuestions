/*

Problem Statement:
Given a matrix with N rows and M columns. 
Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

Look at the image for better understanding

down|-1 <- 2 <- 3 <- 4 <- 5 <-start
    |-> 6 -> 7 -> 8 -> 9 -> 1 -| down
down|-3 <- 2 <- 5 <- 4 <- 6  <-|
    |->7 -> 8 -> 9 -> 1 -> 2 end

For example, for the above matrix, the required output would be as shown below.
5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2.

Input:
First line contains n and m
Next n line contains m space separated integers which describe each row of the 2d array

Constraints:
n,m <=50

Output:
Print all matrix elements in a single line separated by spaces.
 

Sample Input:
5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5

Sample Output:
7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8

*/

function goInZigZag(N, M, matrix) {
  //write code here

  let bag = "";
  let i = 0;
  while (i < N) {
    if (i % 2 == 1) {
      for (let j = 0; j < M; j++) {
        bag += matrix[i][j] + " ";
      }
      i++;
    } else {
      for (let j = M - 1; j >= 0; j--) {
        bag += matrix[i][j] + " ";
      }
      i++;
    }
  }
  console.log(bag);
}
