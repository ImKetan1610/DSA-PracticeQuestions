/*

Description:
You are given a 2D array, whose dimensions are stored in two variables with the name N and M
The value stored in N denotes the number of rows, and the value in M denotes the number of columns
The 2D array is stored in a variable with the name arr
For all rows, you have to print the sum of even elements present in the row
For example, consider the value stored inN = 3,M = 3, 
    and the array is arr = [1,2,3],[4,5,6],[7,8,9], then the required output will be
2  (Even numbers in the row are, [2]. Therefore, the sum becomes 2)
10 (Even numbers in the row are, [4,6]. Therefore, the sum becomes 10) 
8  (Even numbers in the row are, [8]. Therefore, the sum becomes 8)

Input:
The first line of the input contains the value stored in N and M
The next N lines contain M values each denoting the value stored in arr

Output:
For each row, print the sum of even numbers present in the row, line by line

Sample Input:
3 3
1 2 3
4 5 6
7 8 9

Sample Output:
2
10
8

Hint:
In the sample test case, the value stored in N = 3,M = 3, and the array is arr = [1,2,3],[4,5,6],[7,8,9], 
    then the required output will be
2  (Even numbers in the row are, [2]. Therefore, the sum becomes 2)
10 (Even numbers in the row are, [4,6]. Therefore, the sum becomes 10) 
8  (Even numbers in the row are, [8]. Therefore, the sum becomes 8)


*/

function evenSumRows(index, N, M, arr) {
  if (index == N) {
    return;
  }
  let sum = 0;
  for (let i = 0; i < M; i++) {
    if (arr[index][i] % 2 == 0) {
      sum = sum + arr[index][i];
    }
  }
  console.log(sum);
  evenSumRows(index + 1, N, M, arr);
}
