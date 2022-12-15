/*

Problem Statement:
You are given a 2D array, whose dimensions are stored in two variables with the name N and M
The value stored in N denotes the number of rows, and the value in M denotes the number of columns
The 2D array is stored in a variable with the name arr
For all columns, you have to print the sum of even elements present in the column
For example, 
consider the value stored in N = 3, M = 3, 
and the array is arr = [1,2,3],[4,5,6],[7,8,9], 
then the required output will be

4  (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
10 (Even numbers in the column are, [2,8]. Therefore, the sum becomes 10) 
6  (Even numbers in the column are, [6]. Therefore, the sum becomes 6)

Input:
The first line of the input contains the value stored in N and M
The next N lines contain M values each denoting the value stored in arr

Output:
For each column, 
print the sum of even numbers present in the column, line by line

Sample Input: 
3 3
1 2 3
4 5 6
7 8 9

Sample Output:
4
10
6

Hint:
In the sample test case, the value stored in N = 3,M = 3, 
and the array is arr = [[1,2,3],[4,5,6],[7,8,9]], then the required output will be

4  (Numbers in first col: 1,4,7, Even numbers in the column are, [4]. Therefore, the sum becomes 4)
10 (Numbers in second col: 2,5,8, Even numbers in the column are, [2,8]. Therefore, the sum becomes 10) 
6  (Numbers in second col: 3,6,9, Even numbers in the column are, [6]. Therefore, the sum becomes 6)

*/

function evenSumColumns(N, M, arr) {
  //write code here

  for (i = 0; i < M; i++) {
    let sum = 0;
    for (j = 0; j < N; j++) {
      if (arr[j][i] % 2 == 0) {
        sum = sum + arr[j][i];
      }
    }
    console.log(sum);
  }
}
