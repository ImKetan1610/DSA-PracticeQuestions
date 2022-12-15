/*

Problem Statement:
You are given a matrix of size N x M. 
You have to find the absolute difference between the sum of prime and composite elements in the matrix.

Input:
The first line of the input contains N and M, the dimensions of the matrix.
The next N lines contain M space separated integers each denoting the values of the matrix.

Constraints:
1 <= N, M <= 100
1 <= A[i][j] <= 100

Output:
Print a single integer denoting the absolute difference between the sum of prime elements and composite elements in the matrix.

Sample Input:
3 3
1 2 3 
4 5 6
7 8 9

Sample Output:
10

Hint:
In the sample test case, the sum of prime elements which are {2,3,5,7} is 17. 
The sum of composite elements which are {4,6,8,9} is 27. 
Therefore, the absolute difference between the odd and even sum of elements is 10.

*/

function primeAndComposite(N, M, arr) {
  //write code here
  let bag = 0;
  let bag1 = 0;
  for (i = 0; i < N; i++) {
    for (j = 0; j < M; j++) {
      let count = 0;
      for (let k = 1; k <= arr[i][j]; k++) {
        if (arr[i][j] % k == 0) {
          count++;
        }
      }
      if (count == 2) {
        bag += arr[i][j];
      } else if (arr[i][j] > 1) {
        bag1 += arr[i][j];
      }
    }
  }
  console.log(Math.abs(bag1 - bag));
}
