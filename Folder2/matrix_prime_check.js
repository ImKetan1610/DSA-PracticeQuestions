/*

Problem Statement:
In this question, you are given a 2D array stored in a variable with the name arr
The number of rows in the matrix is stored in the variable with the name N, 
while the number of columns stored in the matrix is stored in a variable with the name M
You have to find and print the count of prime numbers present in the matrix

For example, consider the value stored in N = 3, and M = 3, and
N = 3 M = 3
arr = [[1 2 3]
       [4 5 6]
       [7 8 9]]
The prime numbers in the 2D array are 2,3,5,7. Therefore, the required output is 4
Note : The 2D array may contain duplicate elements. 
Each instance of a prime number should be counted separately

Input:
The first line of the input contains the values stored in N and M
The next line contains the values stored in arr


Output
Print the count of prime numbers present in the matrix

Sample Input:
3 3
1 2 3 
4 5 6
7 8 9

Sample Output:
4

Hint:
In the sample test case, the value stored in N = 3, and M = 3, and
N = 3 M = 3
arr = [[1 2 3]
       [4 5 6]
       [7 8 9]]
The prime numbers in the 2D array are2,3,5,7. Therefore, the required output is 4

*/

function matrixPrimeCheck(N, M, arr) {
  let maincount = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let num = arr[i][j];
      if (primecheck(num)) {
        maincount++;
      }
    }
  }

  console.log(maincount);

  function primecheck(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count == 2) {
      return true;
    } else {
      return false;
    }
  }
}
