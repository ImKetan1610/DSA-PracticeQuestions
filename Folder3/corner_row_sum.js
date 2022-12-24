/*

Problem Statement:
You are given a 2D array, whose dimensions are stored in variables with the nameN

The value stored inNdenotes the number of rows and columns

The 2D array is stored in a variable with the namearr

You have to print the sum of elements of the first and last row of the 2D array

For example, consider the value stored inN = 3and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

The first row contains elements 1, 2 and 3
the last row contains elements 7, 8 and 9

Total Sum = 1 + 2 + 3 + 7 + 8 + 9 = 30


Input
The first line of the input contains the number of row and columns stored inN

The nextNlines containNvalues each denoting the value stored inarr


Output
Print thesumof elements of the first and last row present in the 2D Array

Sample Input 1 

3
1 2 3
4 5 6
7 8 9
Sample Output 1

30
Hint

In the sample test case, the value stored inN = 3and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be
The first row contains elements 1, 2 and 3
the last column contains elements 7, 8 and 9

Total Sum = 1 + 2 + 3 + 7 + 8 + 9 = 30 which is the required output

*/

function rowSum(N, arr) {
  // Write code here
  var bag = "";
  var sum1 = 0;
  var sum2 = 0;
  for (var i = N - 1; i >= 0; i--) {
    sum1 += arr[N - 1][i];
  }
  for (var j = 0; j < N; j++) {
    sum2 += arr[0][j];
  }

  console.log(sum1 + sum2);
}
