/*

Description:
You are given a 2D array, whose dimensions are stored in two variables with the name N and M
The value stored in N denotes the number of rows, and the value in M denotes the number of columns
The 2D array is stored in a variable with the name arr
For all columns, you have to print the sum of odd elements present in the column
For example, consider the value stored in N = 3,M = 3, and the array is arr = [1,2,3],[4,5,6],[7,8,9], 
    then the required output will be
8  (Odd numbers in the column are, [1,7]. Therefore, the sum becomes 8)
5  (Odd numbers in the column are, [5]. Therefore, the sum becomes 5) 
12 (Odd numbers in the row are, [3,9]. Therefore, the sum becomes 12)

Input:
The first line of the input contains the value stored in N and M
The next N lines contain M values each denoting the value stored in arr

Output:
For each column, print the sum of odd numbers present in the column, line by line

Sample Input:
3 3
1 2 3
4 5 6
7 8 9

Sample Output:
8 
5 
12

Hint:
In the sample test case, the value stored inN = 3,M = 3, and the array is arr = [1,2,3],[4,5,6],[7,8,9], 
    then the required output will be
8  (Odd numbers in the column are, [1,7]. Therefore, the sum becomes 8)
5  (Odd numbers in the column are, [5]. Therefore, the sum becomes 5) 
12 (Odd numbers in the row are, [3,9]. Therefore, the sum becomes 12)

*/

function oddSumColumns(index, N, M, arr) {
  if (index == M) {
    return;
  }

  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i][index] % 2 == 1) {
      sum += arr[i][index];
    }
  }

  console.log(sum);
  oddSumColumns(index + 1, N, M, arr);
  // complete the rest of the function
}
