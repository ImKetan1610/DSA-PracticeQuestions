/*
Problem statement:
Given a matrix of dimension nxm. 
Find the count of distinct elements that occur in all the rows of the matrix.


Input:
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. 
Then t test cases follow.
The first line of each test case contains two integers n and m (1 ≤ n,m ≤ 100) — The dimensions of the matrix.
The next n lines of each test case contain m integers (1 ≤ Aij ≤ 100) - The input matrix.

Output:
For each test case, print the answer: The count of distinct elements.

Sample Input:
2
3 3
1 2 1 
1 3 1
1 2 1
3 3
1 2 3
1 1 3
1 2 3

Sample Output:
1
2

Hint:
In the sample test case given, there are 2 test cases. In the first test case, the value of n = 3 and m = 3.
The question demands that we find the number of distinct integers that occur in all the rows of the matrix. 
Upon looking at the elements in the matrix in the first test case, only element 1 is present in all the rows of the matrix, 
therefore the count of distinct integers present in all rows of the matrix is 1.

In the second test case, 
again the value of n = 3 and m = 3. 
Upon, observation you can see that the elements 1 and 3 are present in all the rows of the matrix. 
Therefore, the count of distinct elements present in all the rows of the matrix is 2. 
Hence, the output 2.

*/

function DistinctCount(N, M, mat) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < M; i++) {
    obj[mat[0][i]] = 0;
  }
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (obj[mat[i][j]] == i - 1) {
        obj[mat[i][j]] = i;
      }
    }
  }
  for (let key in obj) {
    if (obj[key] == N - 1) {
      count++;
    }
  }
  console.log(count);
}
